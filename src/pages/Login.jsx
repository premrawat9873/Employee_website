import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === "testuser" && password.trim() === "Test123") {
      navigate("/employees");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f)",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 max-w-5xl w-full px-6">
        {/* LEFT SIDE – DESCRIPTION */}
        <div className="hidden md:flex flex-col justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Employee Insights Dashboard
          </h1>

          <p className="text-lg text-gray-200 mb-4">
            A modern React application to explore employee data, visualize
            salaries, analyze city-wise distribution, and capture employee
            photos in real time.
          </p>

          <ul className="text-gray-300 space-y-2">
            <li>📊 Interactive charts & graphs</li>
            <li>🗺 City-based employee insights</li>
            <li>📸 Camera integration</li>
            <li>⚡ Fast & modern UI</li>
          </ul>
        </div>

        {/* RIGHT SIDE – LOGIN CARD */}
        <div className="flex justify-center items-center">
          <Card
            sx={{
              width: 360,
              borderRadius: 3,
              backdropFilter: "blur(10px)",
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight="bold" textAlign="center" mb={1}>
                Welcome Back
              </Typography>

              <Typography
                variant="body2"
                textAlign="center"
                color="text.secondary"
                mb={3}
              >
                Login to access the dashboard
              </Typography>

              <TextField
                label="Username"
                fullWidth
                margin="normal"
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 3, py: 1.2 }}
                onClick={handleLogin}
              >
                Login
              </Button>

              <Typography
                variant="caption"
                display="block"
                textAlign="center"
                mt={2}
                color="text.secondary"
              >
                Demo credentials: <b>testuser / Test123</b>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;