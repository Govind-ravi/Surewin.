import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/Auth/SignUp";
import LogIn from "./components/Auth/LogIn";
import ResetPassword from "./components/Auth/ResetPassword";
import Footer from "./components/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import Policy from "./components/policy/Policy";
import Raffels from "./components/Raffels";
import Process from "./components/Process";
import FAQs from "./components/FAQs";

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <div className="mt-28 min-h-[calc(100vh-300px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/raffels" element={<Raffels />} />
          <Route path="/process" element={<Process />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/policy/*" element={<Policy />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
