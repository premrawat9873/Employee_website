import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { fetchEmployees } from "../services/api";
import Webcam from "react-webcam";

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees().then((data) => {
      const emp = data.find((e) => e.id === Number(id));
      setEmployee(emp);
    });
  }, [id]);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    navigate("/photo", { state: { image: imageSrc } });
  };

  if (!employee) return <p className="p-8">Loading...</p>;

  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">{employee.name}</h1>

      <p><b>Role:</b> {employee.role}</p>
      <p><b>City:</b> {employee.city}</p>
      <p><b>Office ID:</b> {employee.officeId}</p>
      <p><b>Joining Date:</b> {employee.joiningDate}</p>
      <p><b>Salary:</b> ${employee.salary.toLocaleString()}</p>

      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="mt-4 rounded"
      />

      <button
        onClick={capturePhoto}
        className="mt-4 w-full bg-black text-white py-2 rounded"
      >
        Capture Photo
      </button>
    </div>
  );
};

export default EmployeeDetails;