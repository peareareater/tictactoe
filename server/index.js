import express from "express";
import bodyParser from "body-parser";
import config  from './config'
import cors from 'cors'
import  errorHandler from './helpers/errorHandler';
// import db from './db';
import jwt from './helpers/jwt'
const app = express();
import authRouter from './routes/auth'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(errorHandler)
app.use(jwt());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/user', authRouter);


app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});