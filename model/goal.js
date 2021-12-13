import Sequelize from "sequelize";
import db from "../config/database.js";
import leaderboard from "./leaderboard.js";
import user from "./user.js";

const goal = db.define('goals', {
    name: Sequelize.STRING,
    description: Sequelize.TEXT
}, {
    timestamps: false
});

goal.belongsToMany(user, { through: leaderboard });

export default goal;