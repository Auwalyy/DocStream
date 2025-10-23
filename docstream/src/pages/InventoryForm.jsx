import React from "react";
import { FaDownload, FaPrint } from "react-icons/fa";

const InventoryForm = () => {
  return (
    <div
      style={{
        backgroundColor: "#F0F0F0",
        minHeight: "100vh",
        borderRadius: "14px",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "2rem",
          width: "80%",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        }}
      >

        {/* Input grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          <input type="text" placeholder="Facility Name" style={inputStyle} />
          <input type="text" placeholder="Location" style={inputStyle} />
          <input type="text" placeholder="Category" style={inputStyle} />
          <input type="number" placeholder="Quantity" style={inputStyle} />
          <input type="text" placeholder="Manager" style={inputStyle} />
          <input type="date" placeholder="Date Added" style={inputStyle} />
        </div>

        {/* Add another facility button */}
        <div style={{ marginTop: "2rem" }}>
          <button
            style={{
              backgroundColor: "#fff",
              border: "2px solid #ccc",
              borderRadius: "5px",
              padding: "10px 20px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            + Add Another Facility
          </button>
        </div>

        {/* Export section */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #ddd",
            paddingTop: "1rem",
          }}
        >
          <button
            style={{
              backgroundColor: "#E8B037",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Export as Excel Sheet
          </button>

          {/* Icons */}
          <div style={{ display: "flex", gap: "1rem", fontSize: "20px", cursor: "pointer" }}>
            <FaDownload />
            <FaPrint />
          </div>
        </div>
      </div>
    </div>
  );
};

// Input styling
const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "14px",
  width: "100%",
};

export default InventoryForm;
