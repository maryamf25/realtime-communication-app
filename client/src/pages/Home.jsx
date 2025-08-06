import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Join a Meeting</h1>
        <input
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded"
          onClick={() => navigate(`/room/${roomId}`)}
        >
          Join
        </button>
      </div>
    </div>
  );
}
