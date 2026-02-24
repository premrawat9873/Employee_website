import { useLocation, useNavigate } from "react-router-dom";

const PhotoResult = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-xl font-bold mb-4">Captured Photo</h1>

        {state?.image ? (
          <img
            src={state.image}
            alt="Captured"
            className="rounded mb-4"
          />
        ) : (
          <p>No image captured</p>
        )}

        <button
          onClick={() => navigate(-1)}
          className="w-full bg-indigo-600 text-white py-2 rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PhotoResult;