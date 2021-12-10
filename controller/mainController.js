import asyncHandler from 'express-async-handler';
import dotenv, { config } from 'dotenv';
import model from '../model/index.js'
import Op from 'sequelize';

dotenv.config();

const dashboard = asyncHandler(async (req, res) => {
    try {
        const auth = req.user_login;
        await model.user.findAll({
            attributes: ['age', 'height', 'sex', 'weight'],
            where: {
                id: auth.id,
                age: {
                    [Op.eq]: 0
                },
                height: {
                    [Op.eq]: 0
                },
                weight: {
                    [Op.eq]: 0
                }
            }
        })
            .then(indentifNotyExist => {
                console.log(indentifNotyExist.length)
                if (indentifNotyExist.length > 0) {
                    res.status(403).send({
                        succes: true,
                        code: 403,
                        message: 'Your account has not set a goal, please set to fill in the goal',
                        body: '',
                    });
                }
            });
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
        const auth = req.user_login;
        const goal = req.body.goal;
        const age = req.body.age;
        const height = req.body.height;
        const weight = req.body.weight;
        const sex = req.body.sex;

        await model.user.update({
            age: age,
            height: height,
            weight: weight,
            sex: sex
        }, {
            where: {
                id: auth.id
            }
        })
            .then(result => {
                if (result.length > 0) {
                    return res.status(200).send({
                        succes: true,
                        code: 200,
                        message: "Data Identify add successfully",
                        body: {
                            'age': age,
                            'height': height,
                            'weight': weight,
                            'gender': sex,
                            'goal': goal
                        }
                    });
                }
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

const updateGoal = asyncHandler(async (req, res) => {
    try {
        const auth = req.user_login;
        const weight = req.body.weight;
        const goals = req.body.goal
        //kurang insert goals di table hoas
        await model.user.update({
            weight: weight
        }, {
            where: {
                id: auth.id
            }
        })
            .then(goal => {
                if (goal.length > 0) {
                    return res.status(200).send({
                        succes: true,
                        code: 200,
                        message: "Update goal successfully",
                        body: {
                            'weight': weight,
                            'goal': goals
                        }
                    });
                }
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

const getProfile = asyncHandler(async (req, res) => {
    try {
        const auth = req.user_login;
        await model.user.findByPk(auth.id, {
            attributes: ['name', 'email', 'status', 'age', 'sex', 'height', 'weight', 'createdAt', 'updatedAt']
        })
            .then((profile) => {
                return res.status(200).send({
                    succes: true,
                    code: 200,
                    message: "Result data!",
                    body: profile
                })
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
    // try {

    // } catch (error) {
    //     return res.status(500).send({
    //         succes: false,
    //         code: 500,
    //         message: error.message,
    //         body: ''
    //     });
    // }

    return console.log("Game Playing")
});

const gameComplete = asyncHandler(async (req, res) => {
    return console.log("Game Complete");
});

const workout = asyncHandler(async (req, res) => {

});

export { dashboard, identify, updateGoal, getProfile, gamePlaying, gameComplete, workout };


