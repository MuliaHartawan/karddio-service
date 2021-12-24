import goal from './goal.js';
import history_point from './history_point.js';
import leaderboard from './leaderboard.js';
import rule from './rule.js';
import user from './user.js';
import workout from './workout.js';

//relasi users -> goals
goal.belongsToMany(user, {
    through: leaderboard
});
user.belongsToMany(goal, {
    through: leaderboard
});

//relasi users -> rules
rule.belongsToMany(user, {
    through: leaderboard
});
user.belongsToMany(rule, {
    through: leaderboard
});

//relasi goals->rules
goal.hasMany(rule);
rule.belongsTo(goal);

//relasi leaderboard -> history_point
leaderboard.hasMany(history_point);
history_point.belongsTo(leaderboard);

const model = {};

model.leaderboard = leaderboard;
model.goal = goal;
model.rule = rule;
model.user = user;
model.workout = workout;
model.history = history_point;

export default model;