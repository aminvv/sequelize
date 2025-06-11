// const { Model, DataTypes } = require("@sequelize/core");
// const { sequelize } = require("../../config/db.config");


// // create model with  (Model) init
// class User extends Model { }

// User.init({
//     username: DataTypes.STRING,
//     birthday: DataTypes.DATE,
// }, {
//     sequelize,
//     modelName: "user",
//     timestamps: true,
//     createdAt: false
// })





// // create model with  (DEFINE)define


// const User_define = sequelize.define('user_define',{
//     username: DataTypes.STRING,
//     birthday: DataTypes.DATE,
//     age: DataTypes.INTEGER,
// }, {

//     timestamps: true,
//     createdAt: false,
//     tableName:"user-define"
// })





// async function main() {

//     //--------------------- model-- init
//     await User.sync({ force: true })
//     const user = await User.create({
//         username: 'amin asadi',
//         birthday: new Date("1999-09-06"),
//         age:25
//     })
//     console.log(user.dataValues);

// //-------------- define
//     await User_define.sync({ force: true })
//     const user_define = await User_define.create({
//         username: 'amin asadi',
//         birthday: new Date("1999-09-06"),
//         age:25
//     })
//     console.log(user_define.dataValues);
// }

// main()

// module.exports = {
//     main
// }




