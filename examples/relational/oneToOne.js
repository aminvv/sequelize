const { DataTypes, Op, sql } = require('@sequelize/core');
const { DATE } = require('@sequelize/core/_non-semver-use-at-your-own-risk_/data-types.js');
const { sequelize } = require('../../config/db.config');
const { raw } = require('mysql2');


const User = sequelize .define('rel_user', {
    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

}, {
    timestamps: true,
    freezeTableName: true,
});



const Profile = sequelize.define('profile', {

    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    bio: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
}, {
    timestamps: true,
    freezeTableName: true,
});

User.hasOne(Profile,{
    foreignKey:{
        name:'profileId',
        unique:true,
        onDelete:"CASCADE"
    },
    sourceKey:"id"
})



async function main() {
    await sequelize.sync({force:true})
    const user = await User.create({
        firstname: "amin",
        lastname: "asadi",
        username: "viper",
    })
    const profile = await Profile.create({
        age: 25,
        birthday: new Date("1999-09-06"),
        bio: "backend developer",
    })

    await user.setProfile(profile)

    // const userFind = await User.findByPk(1,{include:["profile"],raw:true})
    //     console.log(userFind);
        
        
        
        
        
        //--------------------------------------
        const user1 = await User.findByPk(1)
        const findUser=await user1.getProfile({raw:true})
        console.log(findUser);

    //------------------------------------




}


main()