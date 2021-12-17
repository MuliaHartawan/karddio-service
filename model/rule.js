import Sequelize from "sequelize";
import db from "../config/database.js";

const rule = db.define('rules', {
    name: Sequelize.STRING,
    goalId: Sequelize.INTEGER,
    description: Sequelize.TEXT,
    point: Sequelize.INTEGER,
    duration_stretching: Sequelize.INTEGER,
    duration_workout: Sequelize.INTEGER,
    duration_relaxing: Sequelize.INTEGER,
}, {
    timestamps: false
});

export default rule;