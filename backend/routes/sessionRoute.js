import express from 'express'
import { hanldeStartSession,hanldeGetSession } from '../controllers/sessionController.js'

const router=express.Router()


router.post("/start-session",hanldeStartSession)
router.get("/session/:unique_id",hanldeGetSession)



export default router