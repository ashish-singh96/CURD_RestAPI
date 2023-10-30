import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import route from './route/userRouter.js';

const app=express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const URL=process.env.MONGOURL;
const PORT= process.env.PORT || 3000

mongoose.connect(URL).then(()=>{
console.log("DB Connected")
}).catch(error=>console.log(error));

app.use('/api', route);

app.listen(PORT,()=>{
    console.log(`Server running port ${PORT}`);
})

