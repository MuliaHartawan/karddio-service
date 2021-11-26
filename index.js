import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import db from './config/database.js';
import mainRouter from './routes/mainRouter.js';
import authRouter from './routes/authRouter.js';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', authRouter, mainRouter);

console.log(db.user, db.password);

app.get('/about', (req, res) => res.send('Express is Express'));
app.listen(process.env.PORT, () => console.log(`Hello World app berjalan di http://localhost:${process.env.PORT}`));