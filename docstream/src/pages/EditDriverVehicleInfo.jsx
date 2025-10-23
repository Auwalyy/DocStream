// src/pages/EditDriverVehicleInfo.jsx
import React from "react";
import "./EditDriverVehicleInfo.css";

const EditDriverVehicleInfo = () => {
  const drivers = [
    { name: "Abdullahi Isa", time: "10:00AM" },
    { name: "Hassan", time: "12:00PM" },
  ];

  const handleEdit = (name) => {
    alert(`Editing details for ${name}`);
  };

  return (
    <div className="vehicle-officer-dashboard">
      <h3 className="page-title">Vehicle Officer Dashboard</h3>

      <div className="info-table">
        <div className="table-header">
          <span className="col-name">Name</span>
          <span className="col-time">Time Submitted</span>
          <span className="col-action"></span>
        </div>

        {drivers.map((driver, index) => (
          <div key={index} className="table-row">
            <span className="col-name">{driver.name}</span>
            <span className="col-time">{driver.time}</span>
            <button
              className="edit-btn"
              onClick={() => handleEdit(driver.name)}
            >
              Edit Details
            </button>
          </div>
        ))}
      </div>

      <div className="table-actions">
        <button className="export-btn">Export as Excel Sheet</button>
        <button className="share-btn">Share</button>
      </div>
    </div>
  );
};

export default EditDriverVehicleInfo;
