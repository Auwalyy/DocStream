import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./AddStaff.css";

const AddStaff = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    staffId: "",
    department: "",
    email: "",
    roles: [],
  });

  const roles = ["Uploader", "Approver", "Viewer", "Regional Coordinator"];

  const toggleRole = (role) => {
    setForm((prev) => ({
      ...prev,
      roles: prev.roles.includes(role)
        ? prev.roles.filter((r) => r !== role)
        : [...prev.roles, role],
    }));
  };

  return (
    <div className="add-staff-container">
      <div className="add-staff-card">
        <div className="add-staff-header">
          <button className="back-btn" onClick={() => navigate("/staff-management")}>
            <ChevronLeft size={24} color="#046C3B" />
          </button>
          <h3>ICT Dashboard</h3>
        </div>

        <div className="add-staff-form">
          <div className="form-row">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Staff ID" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Department" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="role-dropdown">
            <select>
              <option>Role</option>
              {roles.map((role) => (
                <option key={role}>{role}</option>
              ))}
            </select>
          </div>

          <button className="submit-btn">Add New Staff</button>
        </div>
      </div>
    </div>
  );
};

export default AddStaff;
