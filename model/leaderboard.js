import Sequelize from "sequelize";
import db from "../config/database.js";

const leaderboard = db.define('leaderboards', {
    goal_id: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,
    rule_id: Sequelize.INTEGER,
    point: Sequelize.INTEGER,
    status: Sequelize.TINYINT,
}, {
    timestamps: true
});

export default leaderboard;