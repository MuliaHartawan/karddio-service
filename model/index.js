import goal from './goal.js';
import leaderboard from './leaderboard.js';
import rule from './rule.js';
import user from './user.js';
import workout from './workout.js';


goal.belongsToMany(user, { through: leaderboard });
user.belongsToMany(goal, { through: leaderboard });

const model = {};

model.leaderbord = leaderboard;
model.goal = goal;
model.rule = rule;
model.user = user;
model.workout = workout;

export default model;