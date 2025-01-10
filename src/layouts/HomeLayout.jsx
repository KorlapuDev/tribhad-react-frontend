import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const HomeLayout = ({ main }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, []);
  const navBarWidth = 13;
  return (
    <Box display="flex" height="100vh" sx={{ overflowY: "auto" }}>
      <Box width={`${navBarWidth}%`} height="100vh" sx={{ overflowY: "auto" }}>
        <Navbar />
      </Box>

      <Box
        width={`${100 - navBarWidth}%`}
        height="100vh"
        sx={{ overflowY: "auto" }}
      >
        <Header />
        <Box width="100%">{main}</Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default HomeLayout;
