import { v4 as uuidv4 } from "uuid";
import Session from "../models/Session.js";


// Step 2: Start Session (Admin)
const hanldeStartSession = async (req,res) => {
  try {
    console.log("call")
    const uniqueId = uuidv4();
    const userUrl = `http://localhost:5173/session/${uniqueId}`;

    const session = new Session({
      type: "admin",
      unique_id: uniqueId,
      userurl: userUrl,
    });

    await session.save();
    res.status(201).json({ success: true, userurl: userUrl });
  } catch (err) {
    res.status(500).json({success:false,error:err.message})
  }
};


// When student opens session URL4
const hanldeGetSession=async (req,res)=>{
     try {
    const uniqueId = req.params.unique_id;

    // Find admin session record
    const session = await Session.findOne({ unique_id: uniqueId });




    if (!session) {
      return res.status(404).json({ success: false, message: "Session not found" });
    }

    

    // Return admin session data to student frontend
    res.json({
      success: true,
      unique_id: session.unique_id,
      userurl: session.userurl
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
}

export { hanldeStartSession,hanldeGetSession };
