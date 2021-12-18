import asyncHandler from 'express-async-handler';
import dotenv, { config } from 'dotenv';
import model from '../model/index.js'
import Op from 'sequelize';
import goal from '../model/goal.js';
import rule from '../model/rule.js';
import { validationResult } from 'express-validator'



dotenv.config();

const dashboard = asyncHandler(async (req, res) => {
    try {
        const auth = req.user_login;
        const indentifNotyExist = await model.user.findAll({
            attributes: ['age', 'height', 'sex', 'weight'],
            where: {
                id: auth.id,
                age: {
                    [Op.not]: 0
                },
                height: {
                    [Op.not]: 0
                },
                weight: {
                    [Op.not]: 0
                }
            }
        })
        console.log(indentifNotyExist);
        if (indentifNotyExist.length > 0) {
            res.status(403).send({
                succes: true,
                code: 403,
                message: 'Your account has not set a goal, please set to fill in the goal',
                body: '',
            });
        }
        await model.user.findAll({
            attributes: ['name', 'email', 'status', 'age', 'sex', 'height', 'weight', 'createdAt', 'updatedAt'],
            where: {
                id: auth.id
            }
        })
            .then(result => {
                return res.status(200).send({
                    succes: true,
                    code: 200,
                    message: "Result data!",
                    body: result[0]
                });
            })
    } catch (error) {
        return res.status(500).send({
            succes: false,
            code: 500,
            message: error.message,
            body: ''
        });
    }
});

const identify = asyncHandler(async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({
                success: false,
                code: 400,
                message: errors.array().map(({ msg }) => msg),
                body: '',
            });
        }

        const auth = req.user_login;
        const { age, height, weight, sex, goal_id } = req.body;
        const rule_id = 1;
        const user_id = auth.id;
        const point = 0
        const status = 1

        //cek apakah user sudah pernah mengisi form identifikasi
        const check = await model.leaderboard.findAll({
            where: {
                user_id: user_id
            }
        })
        if (check.length > 0) {
            return res.status(405).send({
                succes: true,
                code: 405,
                message: "Ooops! You Have Entered Data Identify",
                body: ""
            });
        }

        const user = await model.user.update({
            age,
            height,
            weight,
            sex
        }, {
            where: {
                id: auth.id
            }
        });

        const leaderboard = await model.leaderboard.create({
            goal_id,
            user_id,
            rule_id,
            point,
            status
        });
        if (user && leaderboard) {
            return res.status(200).send({
                succes: true,
                code: 200,
                message: "Data Identify add successfully",
                body: {
                    'age': age,
                    'height': height,
                    'weight': weight,
                    'gender': sex,
                    'goal': goal_id
                }
            });
        }
    } catch (error) {
        return res.status(500).send({
            succes: false,
            code: 500,
            message: error.message,
            body: ''
        });
    }
});

const updateGoal = asyncHandler(async (req, res) => {
    try {
        const auth = req.user_login;
        const { weight, goal_id } = req.body;

        const user = await model.user.update({ weight }, {
            where: { id: auth.id }
        });

        const [leaderboard, created] = await model.leaderboard.findOrCreate({
            where: { user_id: auth.id, goal_id: goal_id },
            defaults: { rule_id: 1, point: 0, status: 1 }
        });
        if (user && leaderboard) {

            const checkLeaderboard = await model.leaderboard.findAll({
                where: {
                    user_id: auth.id, goal_id: goal_id, status: 1
                }
            });
            if (checkLeaderboard) {
                await model.leaderboard.update(
                    { status: 0 }, {
                    where: { user_id: auth.id }
                });
                await model.leaderboard.update(
                    { status: 1 }, {
                    where: { user_id: auth.id, goal_id: goal_id }
                });
                return res.status(200).send({
                    succes: true,
                    code: 200,
                    message: "Update goal successfully",
                    body: {
                        'weight': weight,
                        'goal': leaderboard.goal_id
                    }
                });
            }
        }
    } catch (error) {
        return res.status(500).send({
            succes: false,
            code: 500,
            message: error.message,
            body: ''
        });
    }
});

const getProfile = asyncHandler(async (req, res) => {
    try {
        const auth = req.user_login;
        await model.user.findByPk(auth.id, {
            attributes: ['name', 'email', 'status', 'age', 'sex', 'height', 'weight', 'createdAt', 'updatedAt'],
            include: [goal, rule]
        })
            .then((profile) => {
                return res.status(200).send({
                    succes: true,
                    code: 200,
                    message: "Result data!",
                    body: profile
                });
            });
    } catch (error) {
        return res.status(500).send({
            succes: false,
            code: 500,
            message: error.message,
            body: ''
        });
    }
});

const gamePlaying = asyncHandler(async (req, res) => {
    try {
        const auth = req.user_login;
        const leaderboard = await model.user.findAll({
            attributes: ['name'],
            include: [{
                model: goal,
                attributes: { exclude: ['id'] }
            }, {
                model: rule,
                attributes: { exclude: ['id'] }
            }],
            where: {
                id: auth.id
            }
        })
        return res.status(200).send({
            succes: true,
            code: 200,
            message: "Result data!",
            body: leaderboard[0]
        });
    } catch (error) {
        return res.status(500).send({
            succes: false,
            code: 500,
            message: error.message,
            body: ''
        });
    }
});

const gameComplete = asyncHandler(async (req, res) => {
    try {
        const auth = req.user_login;
        const leaderboard = await model.leaderboard.findAll({ where: { userId: auth.id } });
        const rules = await model.rule.findAll({ where: { goalId: leaderboard.goalId } })
        const response = await res.status(200).send({
            succes: true,
            code: 200,
            message: "Result data!",
            body: rules
        });
        console.log(leaderboard, rule);
        return response;
    } catch (error) {

    }
});

const workout = asyncHandler(async (req, res) => {
    try {
        await model.workout.findAll()
            .then(workout => {
                return res.status(200).send({
                    succes: true,
                    code: 200,
                    message: "Result data!",
                    body: workout
                })
            })
    } catch (error) {
        return res.status(500).send({
            succes: false,
            code: 500,
            message: error.message,
            body: ''
        });
    }

});

const listGoal = asyncHandler(async (req, res) => {
    try {
        await model.goal.findAll()
            .then(goal => {

                return res.status(200).send({
                    succes: true,
                    code: 200,
                    message: "Result data!",
                    body: goal
                })
            })
    } catch (error) {
        return res.status(500).send({
            succes: false,
            code: 500,
            message: error.message,
            body: ''
        });
    }
});

const finalReport = asyncHandler(async (req, res) => {
    try {
        const auth = req.user_login;
        const user = await model.user.findAll({
            attributes: ['weight'],
            include: [{
                model: rule,
                attributes: ['duration_workout']
            },
            {
                model: goal,
            }]
        })
        return res.status(200).send({
            succes: true,
            code: 200,
            message: "Result data!",
            body: user
        });
    } catch (error) {
        return res.status(500).send({
            succes: false,
            code: 500,
            message: error.message,
            body: ''
        });
    }
});

export { dashboard, identify, updateGoal, getProfile, gamePlaying, gameComplete, workout, listGoal, finalReport };


