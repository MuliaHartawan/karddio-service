import express from 'express';
import rootRouter from './routes/rootRouter.js';

const app = express();
app.use('/', rootRouter);

app.get('/about', (req, res) => res.send('Express is Express'))
app.listen(3000, () => console.log('Hello World app berjalan di http://localhost:3000'))