import { useParams } from "react-router-dom";

export default function Room() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Room ID: {id}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-black rounded-xl h-64">Video 1</div>
        <div className="bg-black rounded-xl h-64">Video 2</div>
      </div>
    </div>
  );
}
