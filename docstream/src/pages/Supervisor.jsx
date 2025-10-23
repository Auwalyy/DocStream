// src/pages/Supervisor.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Bell } from "lucide-react";
import "./Supervisor.css";

const SupervisorDashboard = () => {
  const navigate = useNavigate();

  // Dummy incoming requests
  const requests = [
    {
      id: "REQ001",
      name: "Abdullahi Isa",
      vehicleType: "Tanker",
      time: "2 mins ago",
    },
    {
      id: "REQ002",
      name: "Maryam Usman",
      vehicleType: "Hilux",
      time: "10 mins ago",
    },
    {
      id: "REQ003",
      name: "John Bello",
      vehicleType: "Truck",
      time: "25 mins ago",
    },
  ];

  return (
    <div className="supervisor-container">
      <div className="supervisor-header">
        <h2>ROM Supervisor Dashboard</h2>
        <div className="notif-icon">
          <Bell color="green" />
          <span className="notif-count">{requests.length}</span>
        </div>
      </div>

      <div className="request-list">
        <h3>Incoming Requests</h3>
        {requests.map((req) => (
          <div
            key={req.id}
            className="request-card"
            onClick={() => navigate(`/supervisor/request/${req.id}`)}
          >
            <div className="request-info">
              <p><strong>{req.name}</strong></p>
              <p>{req.vehicleType}</p>
              <small>{req.time}</small>
            </div>
            <button className="view-btn">View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupervisorDashboard;
