import { useEffect, useState } from "react";
import { fetchEmployees } from "../services/api";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  Box,
} from "@mui/material";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees().then(setEmployees);
  }, []);

  return (
    <>
      {/* Top Navigation */}
      <Header />

      {/* Page Wrapper */}
      <Box
        sx={{
          p: 6,
          minHeight: "100vh",
          backgroundColor: "#0b0f14",
        }}
      >
        {/* Page Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={5}
          sx={{ color: "#e5e7eb" }}
        >
          Employees
        </Typography>

        {/* Employee Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {employees.map((emp) => (
            <Card
              key={emp.id}
              onClick={() => navigate(`/employees/${emp.id}`)}
              sx={{
                backgroundColor: "#111827",
                border: "1px solid #1f2937",
                borderRadius: 3,
                cursor: "pointer",
                transition: "0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "#6b7280",
                },
              }}
            >
              <CardContent>
                {/* Avatar */}
                <Avatar
                  sx={{
                    bgcolor: "#1f2937",
                    color: "#f9fafb",
                    width: 48,
                    height: 48,
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  {emp.name.charAt(0)}
                </Avatar>

                {/* Employee Name – HIGH CONTRAST */}
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{ color: "#f9fafb" }}
                >
                  {emp.name}
                </Typography>

                {/* Role – MUTED BUT VISIBLE */}
                <Typography
                  fontSize={14}
                  sx={{ color: "#9ca3af", mt: 0.5 }}
                >
                  {emp.role}
                </Typography>

                {/* Footer */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 3,
                  }}
                >
                  {/* City */}
                  <Chip
                    label={emp.city}
                    size="small"
                    sx={{
                      backgroundColor: "#1f2937",
                      color: "#e5e7eb",
                      fontSize: 12,
                    }}
                  />

                  {/* Salary */}
                  <Typography
                    fontWeight={600}
                    sx={{ color: "#e5e7eb" }}
                  >
                    ${emp.salary.toLocaleString()}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </div>
      </Box>
    </>
  );
};

export default EmployeeList;