import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const userRole = "ict-staff";
  const isICTStaff = userRole === "ict-staff";

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="NMDPRA DocStream Logo" className="sidebar-logo" />
      </div>

      <nav className="sidebar-links">
        <NavLink to="/supervisor" className="sidebar-link">
          Dashboard
        </NavLink>
        <NavLink to="/find-company" className="sidebar-link">
          Find Company Details
        </NavLink>
        <NavLink to="/request-vehicle" className="sidebar-link">
          Request Vehicle
        </NavLink>
        <NavLink to="/inventory-form" className="sidebar-link">
          Inventory/Checklist Form
        </NavLink>
        <NavLink to="/request-items" className="sidebar-link">
          Request Items
        </NavLink>

        {/* ICT Staff Only Links */}
        {isICTStaff && (
          <>
            <NavLink to="/staff-management" className="sidebar-link">
              Staff Management
            </NavLink>
            <NavLink to="/activity-log" className="sidebar-link">
              Activity Log
            </NavLink>
            <NavLink to="/add-facility" className="sidebar-link">
              Add Facility
            </NavLink>
            <NavLink to="/edit-driver-vehicle-info" className="sidebar-link">
              Edit Driver/Vehicle Info
            </NavLink>
          </>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
