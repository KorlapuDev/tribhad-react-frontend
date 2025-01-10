import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./sections/LoginPage";
import AuthLayout from "./layouts/AuthLayout";
import HomeLayout from "./layouts/HomeLayout";
import HomePage from "./sections/HomePage";
import { AuthProvider } from "./context/authContext";
import SigninPage from "./sections/SigninPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<AuthLayout main={<LoginPage />} />} />
          <Route
            path="/signin"
            element={<AuthLayout main={<SigninPage />} />}
          />
          <Route path="/" element={<HomeLayout main={<HomePage />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
