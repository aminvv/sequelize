const { DataTypes, Op, sql } = require('@sequelize/core');
const { sequelize } = require('../../config/db.config');


const User = sequelize.define('create-user', {
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
const userList = [
    {
        firstname: "Ali",
        lastname: "Rezaei",
        username: "ali_rezaei",
        age: 28,
        birthday: "1997-02-15",
        bio: "برنامه‌نویس بک‌اند"
    },
    {
        firstname: "Sara",
        lastname: "Karimi",
        username: "sara_krm",
        age: 24,
        birthday: "2001-04-10",
        bio: "طراح رابط کاربری"
    },
    {
        firstname: "Mehdi",
        lastname: "Ahmadi",
        username: "mehdi_dev",
        age: 31,
        birthday: "1993-06-20",
        bio: "توسعه‌دهنده فول‌استک"
    },
    {
        firstname: "Niloofar",
        lastname: "Moradi",
        username: "niloofar.m",
        age: 27,
        birthday: "1998-01-05",
        bio: "علاقه‌مند به جاوااسکریپت"
    },
    {
        firstname: "Reza",
        lastname: "Kazemi",
        username: "rkazemi",
        age: 35,
        birthday: "1990-07-11",
        bio: "کارشناس دیتابیس"
    },
    {
        firstname: "Zahra",
        lastname: "Mohammadi",
        username: "zahra_ui",
        age: 22,
        birthday: "2003-09-19",
        bio: "فرانت‌اند کار"
    },
    {
        firstname: "Amir",
        lastname: "Nasiri",
        username: "amir.nsr",
        age: 29,
        birthday: "1996-03-30",
        bio: "مهندس نرم‌افزار"
    },
    {
        firstname: "Leila",
        lastname: "Shirazi",
        username: "leila_sh",
        age: 26,
        birthday: "1999-12-01",
        bio: "علاقه‌مند به طراحی تجربه کاربری"
    },
    {
        firstname: "Hossein",
        lastname: "Tajik",
        username: "hossein.tjk",
        age: 33,
        birthday: "1992-06-25",
        bio: "مدیر پروژه فنی"
    },
    {
        firstname: "Amin",
        lastname: "Asadi",
        username: "amin.asadi",
        age: 25,
        birthday: "1999-01-09",
        bio: "کارآموز Node.js"
    },
    {
        firstname: "Elham",
        lastname: "Rahmani",
        username: "elham_rhm",
        age: 30,
        birthday: "1995-08-14",
        bio: "علاقه‌مند به فرانت‌اند"
    },
    {
        firstname: "Navid",
        lastname: "Ghasemi",
        username: "navid_gh",
        age: 32,
        birthday: "1993-05-10",
        bio: "برنامه‌نویس جاوا"
    },
    {
        firstname: "Maryam",
        lastname: "Abbasi",
        username: "maryam.ab",
        age: 23,
        birthday: "2002-11-21",
        bio: "علاقه‌مند به یادگیری"
    },
    {
        firstname: "Farhad",
        lastname: "Nikzad",
        username: "farhad.nz",
        age: 34,
        birthday: "1991-04-03",
        bio: "دولوپر فول‌استک"
    },
    {
        firstname: "Parisa",
        lastname: "Kiani",
        username: "parisa_k",
        age: 28,
        birthday: "1997-10-17",
        bio: "توسعه‌دهنده ریاکت"
    },
    {
        firstname: "Saeed",
        lastname: "Jafari",
        username: "saeed.jfr",
        age: 36,
        birthday: "1989-12-08",
        bio: "برنامه‌نویس ارشد"
    },
    {
        firstname: "Shirin",
        lastname: "Latifi",
        username: "shirin.ltf",
        age: 21,
        birthday: "2004-01-29",
        bio: "دانشجوی کامپیوتر"
    },
    {
        firstname: "Kaveh",
        lastname: "Barzegar",
        username: "kaveh_bz",
        age: 27,
        birthday: "1998-03-12",
        bio: "علاقه‌مند به Node.js"
    },
    {
        firstname: "Narges",
        lastname: "Fathi",
        username: "narges.fth",
        age: 26,
        birthday: "1999-06-07",
        bio: "توسعه‌دهنده وب"
    },
    {
        firstname: "Pouya",
        lastname: "Mehrdad",
        username: "pouya.mhr",
        age: 29,
        birthday: "1996-02-22",
        bio: "مشتاق یادگیری روزانه"
    }
];


async function main() {
    await User.sync({ alter: true })
    // await User.bulkCreate(userList)

    // const users=await User.findAll()
    // for(const user of users){
    //     console.log(user.dataValues);
    // }


    // مثل هم هستند  raw با for()


    // const users=await User.findAll({raw:true})
    //     console.log(users.dataValues);




    const users = await User.findAll({
        where: {
            age: {
                [Op.eq]: 24
            }
        },
        raw: true
    })
    // console.log(users.length);



    //------------------------------pagination


    const users_pagination = await User.findAll({
        limit: 10,
        offset: ((2 - 1) * 10),
        raw: true
    })
    // console.log('pagination ---------->>>>>>>>',users_pagination);




    //--------------------------------------- findOne -- findByPk
    const findOne = await User.findOne({
        where: { firstname: 'amin' }, raw: true
    })
    // console.log(' findOne user------------->>>>>>>',findOne);




    const findByPk = await User.findByPk(630, { raw: true })
    // console.log(' findOneByPK user------------->>>>>>>',findByPk);




    const { rows, count } = await User.findAndCountAll({
        where: {},
        raw: true
    })
    //  console.log(' findAndCountAll user------------->>>>>>>',count);
    //  console.log(' findAndCountAll user------------->>>>>>>',rows);



    const Count = await User.count({
        where: {},
        raw: true
    })

    //  console.log(' just count  user------------->>>>>>>',Count);




    const min = await User.min('age', {
        where: {},
        raw: true
    })
    //  console.log(' min age  user------------->>>>>>>',min);



    const max = await User.max('age', {
        where: {},
        raw: true
    })
    //  console.log(' max age  user------------->>>>>>>',max);




    const sumOfage = await User.sum('age', {
        where: {},
        raw: true
    })

    // console.log(' sumOfage user------------->>>>>>>',sumOfage);





    //------------------------------------------------------------------------------ atribute ------- exclude
    const attribute = await User.findAll({
        where: {
            age: {
                [Op.gte]: 24
            }
        },
        attributes: ['firstname', 'lastname', 'age'],   //  show
        raw: true
    })
    // console.log(' attribute  ------------->>>>>>>',attribute);



    const exclude = await User.findAll({
        where: {
            age: {
                [Op.gte]: 24
            }
        },
        exclude: ['username', 'birthday', 'bio'],  // not show
        raw: true
    })
    // console.log(' attribute  ------------->>>>>>>',exclude);






    //----------------------------------------------------------------------------------------------------- order and sql.atrebiute

    const order = await User.findAll({
        // where: {
        //     firstname: {
        //         [Op.gte]: sql.attribute("lastname")             //     if  firstname === lastname
        //     }
        // },

        roder: [['id', 'DESC']],
        roder: ['firstname', "lastname"],                /// اولویت اول  اگر چند تا بود  اون وقت دوم
        roder: [['id', 'DESC']],
        raw: true
    })
    // console.log(' order  ------------->>>>>>>',order);





    //-------------------------------------------------------------------------------------------------------------------- find oprators
    
    const oprators = await User.findAll({
        // where: {
        //     firstname: {
        //         [Op.regexp]: "a$",
        //         [Op.regexp]: "^a",
        //         [Op.notRegexp]: "a$",
        //         [Op.notRegexp]: "^a",
        //         [Op.like]: "a%",
        //         [Op.notLike]: "%a%",
        //         [Op.in]: ['amin','amir'],
        //     },
        //                 age: {
        //         [Op.in]: [20,30,25,26],
        //         [Op.notIn]: [20,30,25,26],
        //         [Op.is]: null,
        //         [Op.isNot]: null,
        //         [Op.ne]: 34,
         
        //     },
        // },  //////// ---------------------------------------  or کردن
        //         where: {
        //             [Op.or]:{
        //                             firstname: {
        //         [Op.regexp]: "a$",
        //     },
        //                 age: {
        //         [Op.ne]: 34,
        //     },
        //             }
        // },
        raw: true
    })






}


main()