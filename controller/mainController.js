import asyncHandler from 'express-async-handler';
import db from '../config/database.js';
import dotenv from 'dotenv';

const dashboard = asyncHandler(async (req, res, next) => {
    db.connect();

    await db.query('select * from users', (err, result) => {
        if (result) {
            next();
        }
    });

    db.query('select ')

    db.end();
});

const identify = asyncHandler(async (req, res, next) => {
    const age = req.body.age;
    const height = req.body.height;
    const weight = req.body.weight;
    const sex = req.body.sex;
    const goal = req.body.goal;

    console.log("age : " + age,
        "height : " + height,
        "weight : " + weight,
        "sex : " + sex,
        "goal : " + goal);
    // const result = await db.query('insert user')

});

const updateGoal = asyncHandler(async (req, res) => {
    const weight = req.body.weight;
    const goal = req.body.goal


});

export { dashboard, identify, updateGoal };


