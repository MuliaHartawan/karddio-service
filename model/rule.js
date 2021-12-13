import Sequelize from "sequelize";
import db from "../config/database.js";
import leaderboard from "./leaderboard.js";

const rule = db.define('rules', {
    name: Sequelize.STRING,
    description: Sequelize.TEXT,
    point: Sequelize.INTEGER,
    duration_stretching: Sequelize.INTEGER,
    duration_workout: Sequelize.INTEGER,
    duration_relaxing: Sequelize.INTEGER,
}, {
    timestamps: true
});

rule.hasMany(leaderboard, { foreignKey: 'rule_id' });

export default rule;