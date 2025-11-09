import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SessionPage() {
  const { unique_id } = useParams();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSession = async () => {
      setError("");
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:5000/api/session/${unique_id}`
        );
        setSession(res.data);
      } catch (err) {
        console.error("Error loading session:", err);
        setError("Session not found or failed to load. Please check the link.");
      } finally {
        setLoading(false);
      }
    };
    fetchSession();
  }, [unique_id]);

//  Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-blue-100">
        <h2 className="text-xl text-gray-600 font-medium animate-pulse">
          Loading session...
        </h2>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-red-50 via-white to-red-100 px-4">
        <div className="max-w-md w-full bg-white border border-red-200 rounded-2xl shadow-md p-6 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-3"> Error</h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <p className="text-gray-500 text-sm">
            Please verify your session link or contact the admin.
          </p>
        </div>
      </div>
    );
  }

  //Session loaded
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-blue-50 via-white to-blue-100 px-4">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8 text-center border border-blue-100">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">🎥 Live Session</h1>

        <p className="text-gray-600 mb-6 break-all">
          <span className="font-medium">Session ID:</span> {session.unique_id}
        </p>

        <div className="flex flex-col items-center">
          <video
            width="600"
            controls
            className="rounded-lg shadow-md border border-gray-200"
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
    </div>
  );
}
