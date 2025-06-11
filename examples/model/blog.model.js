// const { DataTypes } = require("@sequelize/core");
// const { sequelize } = require("../../config/db.config");

// const Blog = sequelize.define('blog', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     title: {
//         type: DataTypes.STRING(150),
//         allowNull: false
//     },
//     slug: {
//         type: DataTypes.STRING(250),
//         allowNull: false,
//         unique:"slug_idx"
//     },
//     content: {
//         type: DataTypes.TEXT,
//         allowNull: true,
//         defaultValue: "content of blog"
//     },
//     author: {
//         type: DataTypes.STRING(70),
//         allowNull: false,

//     },
//         Image: {
//         type: DataTypes.STRING(150),
//         allowNull: true
//     },
//         likes: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//             defaultValue:0

//     },
//         show: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false,
//         defaultValue:false
//     },
// },{
//     timestamps:true,
//     freezeTableName:true
// })



// async function runBlog(){
//     await Blog.sync({alter:true})
//     const blog=await Blog.create({
//         title:"nodejs  structure",
//         slug:"nodejs-structure",
//         content:"nodejs  structure is ...",
//         Image:"https://mysit/image.img",
//         author:"amin asai",
//     })
//     blog.show=true
//     await blog.save()
//     await blog.reload()
//     console.log(blog.dataValues); 
// }


// runBlog()

// module.exports = {
//     runBlog
// }
  