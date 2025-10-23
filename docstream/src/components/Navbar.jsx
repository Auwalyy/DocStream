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
      <h2> Dashboard</h2>

      <div className="navbar-right">
       

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
