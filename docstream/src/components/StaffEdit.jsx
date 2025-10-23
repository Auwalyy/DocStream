import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./StaffEdit.css";

const StaffEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    staffId: "",
    department: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    if (location.state) {
      setFormData(location.state);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Changes saved for ${formData.name}`);
  };

  return (
    <div className="staff-edit-page">
      <div className="staff-edit-card">
        <button className="back-arrow" onClick={() => navigate("/staff-management")}>
          ←
        </button>
        <h3 className="page-title">Edit Staff Details</h3>
        <hr />

        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="staffId"
              placeholder="Staff ID"
              value={formData.staffId}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={handleChange}
            />
          </div>

          <button className="submit-btn">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default StaffEdit;
