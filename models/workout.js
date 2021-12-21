import Sequelize from "sequelize";
import db from "../config/database.js";

const workout = db.define('workouts', {
    name: Sequelize.STRING,
    description: Sequelize.TEXT,
    picture: Sequelize.STRING
}, {
    timestamps: false
});

export default workout;