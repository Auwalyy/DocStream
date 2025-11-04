import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./AddStaff.css";

const AddStaff = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    department: "",
    role: "",
    status: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const roles = ["Uploader", "Approver", "Viewer", "Regional Coordinator"];

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/staff/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage("✅ Staff added successfully!");
        setForm({
          name: "",
          department: "",
          role: "",
          status: null,
        });
      } else {
        const error = await response.json();
        setMessage(`❌ Failed to add staff: ${error.message || "Unknown error"}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
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

        <form className="add-staff-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={form.department}
              onChange={handleChange}
              required
            />
          </div>

          <div className="role-dropdown">
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <button className="submit-btn" type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add New Staff"}
          </button>

          {message && <p className="status-message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddStaff;
