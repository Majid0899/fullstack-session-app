import express from 'express'
import { createConnection } from './config/db.js';
import dotenv from "dotenv";
dotenv.config();


const PORT=process.env.PORT || 5100
const app=express()


createConnection()
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}}`)
})