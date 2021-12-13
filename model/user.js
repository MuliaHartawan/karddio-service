import Sequelize from 'sequelize';
import db from '../config/database.js';
import leaderboard from './leaderboard.js';

const user = db.define('users', {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    status: Sequelize.TINYINT,
    verif_token: Sequelize.STRING,
    age: Sequelize.INTEGER,
    sex: Sequelize.ENUM('undefined', 'male', 'female'),
    height: Sequelize.INTEGER,
    weight: Sequelize.INTEGER,
}, {
    timestamps: true
});

user.hasMany(leaderboard, { foreignKey: 'user_id' });
// user.hasMany(leaderboard, {through : });
// user.belongsToMany()

export default user;