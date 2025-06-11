const { defaults } = require("@sequelize/core/_non-semver-use-at-your-own-risk_/utils/object.js");
const { DataTypes } = require("@sequelize/core");
const { sequelize } = require("../../config/db.config");

const User = sequelize.define('create-user', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
}, {

    timestamps: true,
    createdAt: false,
    tableName: "create-user"
})





async function main() {
    //----------------------------------------------------------------------------------------------------

    await User.sync({ force: true })
    const user = await User.create({
        fullname: "amin asadi",
        username: 'viper',
        password: "123456"
    },
        {
            fields: ["password"]
        }
    )
    console.log(' create --->>>', user.dataValues);
    //----------------------------------------------------------------------------------------------------
    const user1 = User.build({
        fullname: "reza moradi",
        username: 'rz1',
        password: "1111111" 
    })
    await user1.save()
    console.log(user1 instanceof User);
    console.log('build --->>>', user1.dataValues);
    //----------------------------------------------------------------------------------------------------

    const result = await User.bulkCreate([
        { fullname: "ziba vahidi", username: 'rs', password: "32456423314" },
        { fullname: "mojsen agayi ", username: 'vs', password: "32214121421" },
        { fullname: "hamin hosseini", username: 'ds', password: "3246545415146" },
    ])
    const userList = result.map(user => user.dataValues)
    console.log('bulk create --->>>', userList);
    //----------------------------------------------------------------------------------------------------


    // createاندیس دوم هست که مقدار  true یا false داره  [user2,create]که ایا where ترو هسا با نه
    const [user2, create] = await User.findOrCreate({
        where: { fullname: " amirali kohi", },
        defaults: {
            // یوزر نیم بالا هست دیگر نیاز تیست اینجا نوشت
            username: 'viper',
            password: "123456"
        },
        fields: ["username"]
    })
    console.log('find Or create --->>>', user2.dataValues);
    //----------------------------------------------------------------------------------------------------


}

main()


module.exports = {
    main
}