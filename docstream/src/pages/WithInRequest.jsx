import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./WithinRequest.css";

const WithinRequest = () => {
  const navigate = useNavigate();

  return (
    <div className="within-page">
      <div className="within-card">
        <div className="within-header">
          <button className="back-btn" onClick={() => navigate("/request-vehicle")}>
            <ArrowLeft size={20} />
          </button>
          <h3>Fill out the form below</h3>
        </div>

        <hr className="divider" />

        <form className="within-form">
          <div className="form-two-column">
            {/* Left Column */}
            <div className="form-column">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter full name" />
              </div>
              <div className="form-group">
                <label>Department</label>
                <input type="text" placeholder="Enter department" />
              </div>
              <div className="form-group">
                <label>Designation</label>
                <input type="text" placeholder="Enter designation" />
              </div>
              <div className="form-group">
                <label>Destination</label>
                <input type="text" placeholder="Enter destination" />
              </div>
              <div className="form-group">
                <label>Date of Request</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Purpose</label>
                <input type="text" placeholder="Enter purpose" />
              </div>
              <div className="form-group">
                <label>Vehicle Type</label>
                <select>
                  <option>Select Vehicle</option>
                  <option>Car</option>
                  <option>Bus</option>
                  <option>Truck</option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="form-column">
              <div className="form-group">
                <label>Pickup Location</label>
                <input type="text" placeholder="Enter pickup location" />
              </div>
              <div className="form-group">
                <label>Drop-off Location</label>
                <input type="text" placeholder="Enter drop-off location" />
              </div>
              <div className="form-group">
                <label>Departure Time</label>
                <input type="time" />
              </div>
              <div className="form-group">
                <label>Return Time</label>
                <input type="time" />
              </div>
              <div className="form-group">
                <label>Number of Passengers</label>
                <input type="number" placeholder="Enter number" />
              </div>
              <div className="form-group">
                <label>Driver Required</label>
                <select>
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="form-group">
                <label>Additional Notes</label>
                <textarea placeholder="Any notes..." rows="2"></textarea>
              </div>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Request Access
          </button>
        </form>
      </div>
    </div>
  );
};

export default WithinRequest;
