import Sequelize from 'sequelize';
import db from '../config/database.js';

const history_point = db.define('history_points', {
    userId: Sequelize.INTEGER,
    leaderboardId: Sequelize.INTEGER,
    point: Sequelize.INTEGER,
}, {
    timestamps: true
});

export default history_point;