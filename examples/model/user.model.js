const { Model, DataTypes } = require("@sequelize/core");
const { sequelize } = require("../../config/db.config");



class User extends Model {}

User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
},{
    sequelize,
    modelName:"user",
    timestamps:true,
    createdAt:false
})



async function main() {
    await User.sync({force:true})
    const user =await User.create({
        username:'amin asadi',
        birthday:new Date("1999-09-06")
    })
    console.log(user.dataValues);
}

main()

module.exports={
    main
}