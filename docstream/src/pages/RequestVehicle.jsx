import React from "react";
import { useNavigate } from "react-router-dom";
import "./RequestVehicle.css";

const RequestVehicle = () => {
  const navigate = useNavigate();

  const requests = [
    { status: "Approved", name: "Mansur Isa" },
    { status: "Approved", name: "Isa Tafida" },
    { status: "Pending", name: "Musa Hassan" },
    { status: "Declined", name: "Ali Hashim" },
  ];

  return (
    <div className="request-vehicle-page">
      <div className="request-buttons">
        <button className="btn-within" onClick={() => navigate("/request-vehicle/within")}>
          Within
        </button>
        <button className="btn-outtown" onClick={() => navigate("/request-vehicle/out-of-town")}>Out of Town</button>
      </div>

      <div className="vehicle-list">
        <h3>Vehicles Requisition - Today</h3>
        <ul>
          {requests.map((req, index) => (
            <li key={index}>
              <span>
                • {req.status} Request: {req.name}
              </span>
              <a href="#" className="more-details">
                More Details
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RequestVehicle;
