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

leaderboard.hasMany(user, { foreignKey: 'user_id' });
leaderboard.belongTo(user, { foreignKey: 'user_id' });

leaderboard.hasMany(goal, { foreignKey: 'goal_id' });
leaderboard.belongTo(goal, { foreignKey: 'goal_id' });

leaderboard.hasMany(rule, { foreignKey: 'rule_id' });
leaderboard.belongTo(rule, { foreignKey: 'rule_id' });

export default leaderboard;