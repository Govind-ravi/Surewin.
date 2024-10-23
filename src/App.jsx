import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import ResetPassword from "./components/ResetPassword";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <div className="mt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
