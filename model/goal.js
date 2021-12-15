import Sequelize from "sequelize";
import db from "../config/database.js";

const goal = db.define('goals', {
    name: Sequelize.STRING,
    description: Sequelize.TEXT
}, {
    timestamps: false
});

export default goal;