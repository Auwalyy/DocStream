import React, { useState } from "react";
import { Pencil, Download, Printer } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./StaffManagement.css";

const StaffManagement = () => {
  const navigate = useNavigate();

  const [staffList, setStaffList] = useState([
    {
      id: 1,
      name: "Abdullahi Isa",
      department: "DSSRI",
      role: "Uploader",
      staffId: "0000 - HW",
      email: "abdullahiisa@gmail.com",
    },
    {
      id: 2,
      name: "Hassan",
      department: "ICT",
      role: "Uploader",
      staffId: "0001 - AB",
      email: "hassan@gmail.com",
    },
    {
      id: 3,
      name: "Bello",
      department: "Admin",
      role: "Approver",
      staffId: "0002 - CD",
      email: "bello@gmail.com",
    },
    {
      id: 4,
      name: "Mustapha",
      department: "Procurement",
      role: "Viewer",
      staffId: "0003 - EF",
      email: "mustapha@gmail.com",
    },
  ]);

  const deactivateStaff = (id) => {
    setStaffList(staffList.filter((s) => s.id !== id));
  };

  return (
    <div className="staff-container">
      <div className="staff-card">
        <div className="staff-header">
          <button
            className="add-staff-btn"
            onClick={() => navigate("/staff-management/add")}
          >
            Add New Staff
          </button>
        </div>

        <div className="table-wrapper">
          <table className="staff-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Role</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {staffList.map((staff) => (
                <tr key={staff.id}>
                  <td>{staff.name}</td>
                  <td>{staff.department}</td>
                  <td>{staff.role}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() =>
                        navigate(`/staff-management/edit/${staff.id}`, {
                          state: staff, // ✅ pass data to edit page
                        })
                      }
                    >
                      <Pencil size={18} color="#046C3B" />
                    </button>
                  </td>
                  <td>
                    <button
                      className="deactivate-btn"
                      onClick={() => deactivateStaff(staff.id)}
                    >
                      Deactivate Staff
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="export-section">
          <button className="export-btn">Export as Excel Sheet</button>
          <Download size={26} color="#046C3B" className="icon" />
          <Printer size={26} color="#046C3B" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;
