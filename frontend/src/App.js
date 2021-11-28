import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Navbar from "./components/StyledComponents/Navbar";
import Aboutpage from "./pages/Aboutpage";
import Dashboardpage from "./pages/Dashboardpage";
import Featurepage from "./pages/Featurepage";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/features" element={<Featurepage />} />
        <Route exact path="/about" element={<Aboutpage />} />
        <Route exact path="/signin" element={<LoginPage />} />
        <Route exact path="/signup" element={<RegisterPage />} />
        <Route exact path="/dashboard" element={<Dashboardpage />} />
      </Switch>
    </Router>
  );
};

export default App;
