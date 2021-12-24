import Sequelize from "sequelize";
import db from "../config/database.js";

const leaderboard = db.define('leaderboards', {
    goalId: Sequelize.INTEGER,
    userId: Sequelize.INTEGER,
    ruleId: Sequelize.INTEGER,
    point: Sequelize.INTEGER,
    status: Sequelize.TINYINT,
}, {
    timestamps: true
});

export default leaderboard;