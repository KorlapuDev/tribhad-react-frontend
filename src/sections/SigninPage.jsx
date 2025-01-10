import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { propeties } from "../config/properties";
import { toast } from "react-toastify";

const SigninPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`${propeties.BASE_URL}/user/register`, formData)
      .then((res) => {
        console.log(res.status);
        if (res.status === 201) {
          navigate("/login");
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
        toast.error(`error occured ! please try again`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    console.log("Sign-In Data:", formData);
  };

  const navigate = useNavigate();

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
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            margin="normal"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <TextField
            fullWidth
            label="Mobile"
            variant="outlined"
            margin="normal"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Sign In
          </Button>
          <Box mt={2} textAlign="center">
            <Typography>
              Already have an account{" "}
              <Typography
                variant="span"
                sx={{ cursor: "pointer" }}
                color="primary"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Typography>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default SigninPage;
