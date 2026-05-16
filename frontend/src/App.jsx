import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "../pages/Home";

import { Otp } from "../pages/Otp";
import { Search } from "../pages/Search";
import { Verify } from "../pages/Verify";
import { Register } from "../pages/Register";

function App() {
  return (
    <div className="bg-gray-100 w-full h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/search" element={<Search />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
