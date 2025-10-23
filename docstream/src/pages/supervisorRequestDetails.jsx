// src/pages/SupervisorRequestDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./Supervisor.css";

const SupervisorRequestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy request data (replace with real data later)
  const request = {
    id: id,
    name: "Abdullahi Isa",
    vehicleType: "Tanker",
  };

  return (
    <div className="request-detail-container">
      {/* Header with Back Arrow */}
      <div className="detail-header">
        
        <h3>ROM Supervisor Dashboard</h3>
      </div>

      {/* Incoming Banner */}
      <div className="incoming-banner">
        <p><strong>Incoming Request</strong></p>
        <p>From {request.name}</p>
      </div>

      {/* Request Details */}
      <div className="request-fields">
        <label>Name:</label>
        <input type="text" value={request.name} disabled />

        <label>ID:</label>
        <input type="text" value={request.id} disabled />

        <label>Type of Vehicle:</label>
        <input type="text" value={request.vehicleType} disabled />
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="accept-btn">Accept</button>
        <button className="decline-btn">Decline</button>
        <button className="review-btn" onClick={() => navigate("/supervisor")}>
          Review
        </button>
      </div>
    </div>
  );
};

export default SupervisorRequestDetails;
