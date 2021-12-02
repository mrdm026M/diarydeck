import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Navbar from "./components/StyledComponents/Navbar";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";
import FeaturePage from "./pages/FeaturePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateNotePage from "./pages/Notes/CreateNotePage";
import NotesPage from "./pages/Notes/NotesPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/features" element={<FeaturePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/signin" element={<LoginPage />} />
        <Route exact path="/signup" element={<RegisterPage />} />
        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route exact path="/notes" element={<NotesPage />} />
        <Route exact path="/createnote" element={<CreateNotePage />} />
      </Switch>
    </Router>
  );
};

export default App;
