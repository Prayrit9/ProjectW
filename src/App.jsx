import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NGO from "./components/NGO";
import Restaurant from "./components/Restaurant";
import DeliveryPartner from "./components/DeliveryPartner";
import Admin from "./components/Admin";
import Login from "./components/Login"; // Import the Login component

function AppRoutes() {
  return (
    <Router>
      <div>
        {/* Routes for Pages */}
        <div className="">
          <Routes>
            {/* Default route is the Login page */}
            <Route path="/" element={<Login />} />
            <Route path="/ngo" element={<NGO />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/delivery-partner" element={<DeliveryPartner />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default AppRoutes;
