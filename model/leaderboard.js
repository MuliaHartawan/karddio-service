import Sequelize from "sequelize";
import db from "../config/database.js";
import user from "./user.js";
import goal from "./goal.js";
import rule from "./rule.js";

const leaderboard = db.define('leaderbords', {
    goal_id: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,
    rule_id: Sequelize.INTEGER,
    point: Sequelize.INTEGER,
    status: Sequelize.TINYINT,
}, {
    timestamps: true
});


leaderboard.belongsTo(user, { foreignKey: 'user_id' });

leaderboard.belongsTo(goal, { foreignKey: 'goal_id' });

leaderboard.belongsTo(rule, { foreignKey: 'rule_id' });



export default leaderboard;