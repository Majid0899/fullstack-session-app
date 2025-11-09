import React, { useState } from "react";
import axios from "axios";

export default function AdminPage() {
  const [sessionUrl, setSessionUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const startSession = async () => {
    setLoading(true);
    setError(""); // clear previous errors
    setSessionUrl("");

    try {
      const res = await axios.post("http://localhost:5000/api/start-session");
      setSessionUrl(res.data.userurl);
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.message ||
          "Failed to start session. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-blue-50 via-white to-blue-100 px-4">
      <div className="max-w-xl w-full bg-white shadow-xl rounded-2xl p-8 text-center border border-blue-100">
        <h1 className="text-3xl text-center font-bold text-blue-700 mb-6">
          Admin Dashboard
        </h1>

        <button
          onClick={startSession}
          disabled={loading}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
          }`}
        >
          {loading ? "Starting..." : "START SESSION"}
        </button>

        {/* Error Message */}
        {error && (
          <div className="mt-4 bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-md text-sm font-medium">
            {error}
          </div>
        )}

        {/*Session Display */}
        {sessionUrl && (
          <div className="mt-8 text-left">
            <p className="text-gray-700 mb-2 font-medium">
              Session created successfully!
            </p>
            <p className="text-gray-600 mb-4">Share this link with students:</p>
            <a
              href={sessionUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline break-all hover:text-blue-800"
            >
              {sessionUrl}
            </a>

            <div className="mt-8 flex flex-col items-center">
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
        )}
      </div>
    </div>
  );
}
