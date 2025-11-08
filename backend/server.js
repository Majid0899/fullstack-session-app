import express from 'express'
import { createConnection } from './config/db.js';
import dotenv from "dotenv";
import cors from 'cors'
import sessionRoute from "./routes/sessionRoute.js"
dotenv.config();


const PORT=process.env.PORT || 5100
const app=express()

app.use(express.json());
app.use(cors());
createConnection()

app.use("/api",sessionRoute)


app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})