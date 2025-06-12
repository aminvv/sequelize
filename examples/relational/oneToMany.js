const { DataTypes } = require('@sequelize/core');
const { sequelize } = require('../../config/db.config');


const User = sequelize.define('rel_user', {
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

const Task = sequelize.define('task', {
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }, 
    desc: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM("pending", "done"),
        defaultValue: "pending",
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "id",
        },
        onDelete: "CASCADE"
    },
}, {
    timestamps: true,
    freezeTableName: true,
});

User.hasMany(Task);
// Task.belongsTo(User)   نسخه ای قدیمی 6--5--4







async function main() {
    await sequelize.sync({ force: true })
    const user = await User.create({
        firstname: "amin",
        lastname: "asadi",
        username: "viper",
    });

    await Task.bulkCreate([
        { title: "title1", desc: "any thing", userId: user.id },
        { title: "title2", desc: "any thing", userId: user.id },
        { title: "title3", desc: "any thing", userId: user.id },
        { title: "title4", desc: "any thing", userId: user.id },
    ]);

    const tasks = await user.getTasks({ raw: true });
    console.log(tasks)
}

main();
