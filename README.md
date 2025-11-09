# Full Stack Developer Assignment — Live Session App (Node.js + MongoDB + React)

## 👋 Overview
This project implements the Round 1 assignment for the Full Stack Developer position.  
It fulfills all requirements specified in the task description using the **MERN stack (MongoDB, Express, React, Node.js,Tailwindcss)**.

---

## ⚙️ Features Implemented
### ✅ Step 1: Database Table
- Database: **MongoDB**
- Collection: `sessions`
- Fields:
  | Field | Type | Description |
  |--------|------|-------------|
  | id | Auto-generated (`_id`) | Primary Key |
  | type | String | User type (`admin` or `student`) |
  | unique_id | String | Unique session ID |
  | userurl | String | Session access URL |

---

### ✅ Step 2: Admin Page (`/`)
- Displays a **START SESSION** button.
- When clicked:
  - Creates a new record in the `sessions` collection.
  - Saves:
    ```
    type = "admin"
    unique_id = randomly generated UUID
    userurl = session URL
    ```
  - Displays a **video player** with Play, Pause, Volume, and Fullscreen controls.
  - Displays a shareable link for students.

---

### ✅ Step 3: Student Page (`/session/:unique_id`)
- When a user opens the generated `userurl`:
  - Fetches the session data using the `unique_id`.
  - Displays the **same video player** (with full controls).
  - Session remains active with the same unique_id.

---

## 🧠 Tech Stack
| Layer | Technology |
|--------|-------------|
| Frontend | React (with React Router, Axios,TailwindCSS) |
| Backend | Node.js + Express |
| Database | MongoDB (via Mongoose) |
| ID Generation | `uuid` library |

---

## 🚀 How to Run the Project

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Majid0899/fullstack-session-app.git
cd fullstack-session-app


Setup Backend
    cd backend
    npm install

    Create a .env file:
        PORT=5000
        MONGO_URI=mongodb://localhost:27017/live_sessions_db
    Run the backend:
        npm run dev

Setup Frontend
    cd frontend
    npm install

    Run the frontend:
        npm run dev

Notes

    Designed per assignment requirements — no extra dependencies or features added.

    Admin and student both have full control of video playback (Play, Pause, Volume, Fullscreen).

    Backend and frontend communicate via REST API using Axios