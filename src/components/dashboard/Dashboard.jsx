import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Profile from "./Profile";
import History from "./History";
import Payments from "./Payments";
import Favorites from "./Favorites";
import Result from "./Result";
import ClaimNow from "./ClaimNow";
import Results from "./Results";
import EditProfile from "./EditProfile";

function Dashboard() {
  return (
    <>
      <div className="flex items-center h-[calc(100vh-200px)] gap-8">
        <div className="text-btn-text bg-dark-gray-btn flex flex-col py-8 px-16 w-fit text-2xl font-semibold space-y-6 rounded-tr-xl rounded-br-xl">
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive ? "font-bold text-orange-btn" : ""
            }
          >
            <div>Profile</div>
          </NavLink>
          <NavLink
            to="/dashboard/payments"
            className={({ isActive }) =>
              isActive ? "font-bold text-orange-btn" : ""
            }
          >
            <div>Payments</div>
          </NavLink>
          <NavLink
            to="/dashboard/history"
            className={({ isActive }) =>
              isActive ? "font-bold text-orange-btn" : ""
            }
          >
            <div>History</div>
          </NavLink>
          <NavLink
            to="/dashboard/results"
            className={({ isActive }) =>
              isActive ? "font-bold text-orange-btn" : ""
            }
          >
            <div>Results</div>
          </NavLink>
          <NavLink
            to="/dashboard/favorites"
            className={({ isActive }) =>
              isActive ? "font-bold text-orange-btn" : "inactive-class"
            }
          >
            <div>Favorites</div>
          </NavLink>
        </div>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard/profile" />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/history" element={<History />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/results" element={<Results />} />
            <Route path="/result/:id" element={<Result />} />
            <Route path="/claim-now/:id" element={<ClaimNow />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
