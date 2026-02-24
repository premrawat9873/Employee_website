import { useEffect, useState } from "react";
import { fetchEmployees } from "../services/api";
import Header from "../components/Header";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { Typography, Paper, Box } from "@mui/material";

const COLORS = [
  "#f3f4f6", // near white
  "#d1d5db", // light grey
  "#9ca3af", // grey
  "#6b7280", // dark grey
  "#e5e7eb", // soft white
];

const CityChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchEmployees().then((employees) => {
      const cityCount = {};

      employees.forEach((e) => {
        cityCount[e.city] = (cityCount[e.city] || 0) + 1;
      });

      const formatted = Object.entries(cityCount).map(
        ([city, value]) => ({
          name: city,
          value,
        })
      );

      setData(formatted);
    });
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
        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={4}
          sx={{ color: "#e5e7eb" }}
        >
          Employee Distribution by City
        </Typography>

        {/* Chart Card */}
        <Paper
          sx={{
            backgroundColor: "#111827",
            border: "1px solid #1f2937",
            borderRadius: 3,
            p: 4,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {data.length === 0 ? (
            <Typography sx={{ color: "#9ca3af" }}>
              No data available
            </Typography>
          ) : (
            <ResponsiveContainer width="100%" height={420}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={90}
                  outerRadius={150}
                  paddingAngle={3}
                  stroke="#020617"
                  strokeWidth={2}
                >
                  {data.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                {/* CUSTOM HIGH-CONTRAST TOOLTIP */}
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#020617",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                  labelStyle={{
                    color: "#e5e7eb",
                    fontWeight: 600,
                  }}
                  itemStyle={{
                    color: "#f9fafb",
                    fontSize: "14px",
                  }}
                  cursor={{
                    fill: "rgba(255,255,255,0.05)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </Paper>
      </Box>
    </>
  );
};

export default CityChart;