// src/App.js or wherever you define your routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Loginpage';
import SignupPage from './components/SignupPage';
import Dashboard from './components/Dashboard';
import AttendancePage from './components/AttendancePage';
import WelcomePage from './components/Welcomepage';
import SelectClass from './components/SelectClass';
import ClassDetails from './components/ClassDetails';
import Details from './components/Details'; // Import the Details component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/select-class" element={<SelectClass />} /> 
        <Route path="/class" element={<ClassDetails />} />
        <Route path="/details" element={<Details />} /> {/* Add the Details route */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
