import React from "react";
import "./ActivityLog.css";

const ActivityLog = () => {
  const data = [
    { date: "15th February", name: "Abdullahi Isa", role: "Uploader", change: "Uploaded a take over file" },
    { date: "15th February", name: "Musa Ibrahim", role: "Viewer", change: "Reset a password" },
    { date: "15th February", name: "Sadik Kabir", role: "Uploader", change: "Uploaded a general file" },
    { date: "15th February", name: "Bello Kamal", role: "Uploader", change: "Uploaded a take over file" },
    { date: "15th February", name: "Haidar Musa", role: "Uploader", change: "Uploaded a take over file" },
    { date: "15th February", name: "Kamal Ali", role: "Approver", change: "Is now acting as Regional Coordinator" },
    { date: "15th February", name: "Ali Isa", role: "Regional Coordinator", change: "Approved a Vehicle Request (Out of Town)" },
  ];

  return (
    <div className="activity-wrapper">
      <button className="back-btn">←</button>
      <div className="activity-container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Staff Name</th>
              <th>Role</th>
              <th>Changes Made</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td>{row.date}</td>
                <td>{row.name}</td>
                <td>{row.role}</td>
                <td>{row.change}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityLog;
