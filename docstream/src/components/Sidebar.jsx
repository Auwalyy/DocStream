import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const [userRole, setUserRole] = useState("ict-staff");
  const isICTStaff = userRole === "ict-staff";

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        
        {/* Role Switcher - Remove this in production */}
        <div className="role-switcher">
          <label htmlFor="role-select"> Role:</label>
          <select 
            id="role-select"
            value={userRole} 
            onChange={(e) => setUserRole(e.target.value)}
            className="role-select"
          >
            <option value="ict-staff">ICT</option>
            <option value="user">STAFF</option>
          </select>
        </div>
      </div>

      <nav className="sidebar-links">
        <NavLink to='/supervisor' className="sidebar-link">
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