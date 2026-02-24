import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import EmployeeList from "./pages/EmployeeList";
import EmployeeDetails from "./pages/EmployeeDetails";
import PhotoResult from "./pages/PhotoResult";
import SalaryChart from "./pages/SalaryChart";
import CityChart from "./pages/CityChart";
import CityMap from "./pages/CityMap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />
        <Route path="/photo" element={<PhotoResult />} />
        <Route path="/chart" element={<SalaryChart />} />
        <Route path="/city-chart" element={<CityChart />} />
        <Route path="/map" element={<CityMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;