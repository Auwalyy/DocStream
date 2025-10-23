// src/pages/AddFacility.jsx
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./AddFacility.css";

const AddFacility = () => {
  const navigate = useNavigate();

  return (
    <div className="add-facility-container">
       

      <h3 className="page-title">Add Facility</h3>

      <div className="facility-grid">
        {/* Old Facility Section */}
        <div className="facility-section">
          <h4>Old Facility</h4>
          <div className="input-group">
            <label>Facility Name</label>
            <input type="text" placeholder="Enter old facility name" />
          </div>
          <div className="input-group">
            <label>Facility ID</label>
            <input type="text" placeholder="Enter old facility ID" />
          </div>
          <div className="input-group">
            <label>Location</label>
            <input type="text" placeholder="Enter old location" />
          </div>
        </div>

        {/* New Facility Section */}
        <div className="facility-section">
          <h4>New Facility</h4>
          <div className="input-group">
            <label>Facility Name</label>
            <input type="text" placeholder="Enter new facility name" />
          </div>
          <div className="input-group">
            <label>Facility ID</label>
            <input type="text" placeholder="Enter new facility ID" />
          </div>
          <div className="input-group">
            <label>Location</label>
            <input type="text" placeholder="Enter new location" />
          </div>
        </div>
      </div>

      {/* Save Changes Button */}
      <div className="save-btn-wrapper">
        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
};

export default AddFacility;
