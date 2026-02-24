import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "#020617",
        borderBottom: "1px solid #1f2937",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{ cursor: "pointer", fontWeight: 600, color: "#e5e7eb" }}
          onClick={() => navigate("/employees")}
        >
          Employee Dashboard
        </Typography>

        <div style={{ display: "flex", gap: 12 }}>
          {[
            ["Employees", "/employees"],
            ["Salary", "/chart"],
            ["Cities", "/city-chart"],
            ["Map", "/map"],
          ].map(([label, path]) => (
            <Button
              key={label}
              onClick={() => navigate(path)}
              sx={{
                color: "#9ca3af",
                textTransform: "none",
                "&:hover": {
                  color: "#e5e7eb",
                  backgroundColor: "#111827",
                },
              }}
            >
              {label}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;