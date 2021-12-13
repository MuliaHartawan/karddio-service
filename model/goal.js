import Sequelize from "sequelize";
import db from "../config/database.js";
import leaderboard from "./leaderboard.js";

const goal = db.define('goals', {
    name: Sequelize.STRING,
    description: Sequelize.TEXT
}, {
    timestamps: false
});

goal.hasMany(leaderboard, { foreignKey: 'goal_id' });

export default goal;