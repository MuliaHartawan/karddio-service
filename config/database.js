// import mysql from 'mysql2';
import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME
// });
// const db = pool.promise();
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: 'localhost'
})
// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME
// });


export default db;
