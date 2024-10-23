import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Privacy from "./Privacy";
import Refund from "./Refund";
import Cookie from "./Cookie";
import TermsAndConditions from "./T&C";

function Policy() {
  return (
    <>
      <div className="flex items-center h-[calc(100vh-150px)] gap-8">
        <div className="text-nowrap text-btn-text bg-dark-gray-btn flex flex-col py-8 px-16 w-fit text-2xl font-semibold space-y-6 rounded-tr-xl rounded-br-xl">
          <NavLink
            to="/policy/privacy"
            className={({ isActive }) =>
              isActive ? "font-bold text-orange-btn" : ""
            }
          >
            <div>Privacy</div>
          </NavLink>
          <NavLink
            to="/policy/refund"
            className={({ isActive }) =>
              isActive ? "font-bold text-orange-btn" : ""
            }
          >
            <div>Refund</div>
          </NavLink>
          <NavLink
            to="/policy/cookie"
            className={({ isActive }) =>
              isActive ? "font-bold text-orange-btn" : ""
            }
          >
            <div>Cookie</div>
          </NavLink>
          <NavLink
            to="/policy/terms-and-conditions"
            className={({ isActive }) =>
              isActive ? "font-bold text-orange-btn" : ""
            }
          >
            <div>T's and C's</div>
          </NavLink>
        </div>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/policy/privacy" />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/cookie" element={<Cookie />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />            
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Policy;
