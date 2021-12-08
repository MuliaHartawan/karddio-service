import asyncHandler from 'express-async-handler';
import db from '../config/database.js';
import dotenv, { config } from 'dotenv';
import model from '../model/index.js'

dotenv.config();

const dashboard = asyncHandler(async (req, res) => {
    try {
        const auth = req.user_login;
        const [indentifNotyExist] = await db.query('select age, height, sex, weight from users where id = ?', auth.id);
        console.log(indentifNotyExist);
        if (!indentifNotyExist.length > 0) {
            res.status(403).send({
                succes: true,
                code: 403,
                message: 'Your account has not set a goal, please set to fill in the goal',
                body: '',
            });
        }
        const [dashboard] = await db.query('select * from users where id = ?', auth.id);

        return res.status(200).send({
            succes: true,
            code: 200,
            message: "Result data!",
            body: dashboard[0]
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

const identify = asyncHandler(async (req, res) => {
    try {
        const auth = req.user_login;
        const age = req.body.age;
        const height = req.body.height;
        const weight = req.body.weight;
        const sex = req.body.sex;
        const goal = req.body.goal;

        const [result] = await db.query('update users set age = ?, sex = ?, height = ?, weight = ?, goal_id = ? where id = ?', [age, sex, height, weight, goal, auth.id]);
        if (result) {
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
        const goal = req.body.goal

        const [result] = await db.query('update users set weight = ?, goal_id = ? where id = ?', [weight, goal, auth.id]);

        if (result) {
            return res.status(200).send({
                succes: true,
                code: 200,
                message: "Update goal successfully",
                body: {
                    'weight': weight,
                    'goal': goal
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

const getProfile = asyncHandler(async (req, res) => {
    try {
        const auth = req.user_login;
        console.log(auth);
        await db.model.findAll()
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


