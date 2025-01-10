import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import axios from "axios";
import { propeties } from "../config/properties";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { login } = useAuth();

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`${propeties.BASE_URL}/user/login`, credentials)
      .then((res) => {
        if (res.status === 200) {
          login();
          navigate("/");
          toast.success(`${res?.data?.message}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((err) => {
        toast.error(`error occured ! Try again`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Box width="100%" mb={20} px={2} py={1}>
        <Typography variant="h1" fontWeight={500}>
          Schoolhub
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ padding: 4, width: "25%", borderRadius: 3 }}>
        <Typography variant="h5" textAlign="center" marginBottom={3}>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email address"
            variant="outlined"
            margin="normal"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
          <Box mt={2} textAlign="center">
            <Typography>
              Don't have an account{" "}
              <Typography
                variant="span"
                sx={{ cursor: "pointer" }}
                color="primary"
                onClick={() => {
                  navigate("/signin");
                }}
              >
                SignIn
              </Typography>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
