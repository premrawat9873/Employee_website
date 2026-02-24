import { useEffect, useState } from "react";
import { fetchEmployees } from "../services/api";
import Header from "../components/Header";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Typography, Paper } from "@mui/material";

const SalaryChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchEmployees().then((res) => setData(res.slice(0, 10)));
  }, []);

  return (
    <>
      <Header />

      <div className="p-10 min-h-screen bg-[#0f172a]">
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Salary Analytics
        </Typography>

        <Paper
          sx={{
            background: "#020617",
            border: "1px solid #1e293b",
            borderRadius: 3,
            p: 4,
          }}
        >
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <XAxis dataKey="name" hide />
              <YAxis tick={{ fill: "#9ca3af" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#020617",
                  border: "1px solid #1e293b",
                  color: "#e5e7eb",
                }}
              />
              <Bar
                dataKey="salary"
                fill="#6366f1"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </div>
    </>
  );
};

export default SalaryChart;