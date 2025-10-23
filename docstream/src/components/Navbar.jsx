import React, { useState } from "react";
import { Bell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [userRole, setUserRole] = useState("ict-staff"); // Default role
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const notifications = [
    { id: 1, name: "Abdullahi Isa" },
    { id: 2, name: "Khamis Adam" },
    { id: 3, name: "Muhammad Yusuf" },
  ];

  const isSupervisor = userRole === "supervisor";

  const handleNotificationClick = (id) => {
    setOpen(false);
    navigate(`/request/${id}`);
  };

  return (
    <header className="navbar">
      <h2>{isSupervisor ? "ROM Supervisor Dashboard" : "Staff Dashboard"}</h2>

      <div className="navbar-right">
        {/* Role Switcher */}
        <div className="role-switcher">
          <label htmlFor="role-select">Role:</label>
          <select
            id="role-select"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
            className="role-select"
          >
            <option value="ict-staff">ICT</option>
            <option value="supervisor">Supervisor</option>
          </select>
        </div>

        {/* Active Status */}
        <div className="active-status">
          <span className="status-dot"></span> Active
        </div>

        {/* Notifications only for Supervisor */}
        {isSupervisor && (
          <div className="notification-wrapper">
            <div className="notification-icon" onClick={() => setOpen(!open)}>
              <Bell size={22} />
              <span className="badge">{notifications.length}</span>
            </div>

            {open && (
              <div className="notification-dropdown">
                {notifications.map((note) => (
                  <div
                    key={note.id}
                    className="notification-item"
                    onClick={() => handleNotificationClick(note.id)}
                  >
                    <div className="notif-icon">📩</div>
                    <p>Incoming Request From {note.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="profile-icon">
          <User size={20} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
