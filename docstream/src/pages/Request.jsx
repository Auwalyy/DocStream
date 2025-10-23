import React from "react";

const RequestItems = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
         display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#F0F0F0",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          width: "90%",
          maxWidth: "1000px",
          padding: "2rem", // increased padding
          marginTop: "1rem",
          marginBottom: "3rem",
        }}
      >
        {/* Title */}
        <h2
          style={{
            backgroundColor: "#007A33",
            padding: "1rem",
            color: "white",
            fontFamily: 'Arial, sans-serif',
            fontWeight: "bold",
            textAlign: "center",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
            borderRadius: "6px",
            marginBottom: "2rem",
            fontSize: "20px",
          }}
        >
          Internal
        </h2>

        {/* Row 1 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem", // more spacing
            marginBottom: "1.5rem",
          }}
        >
          <input type="text" placeholder="Name of Request" style={inputStyle} />
          <input type="text" placeholder="Unique ID" style={inputStyle} />
        </div>

        {/* Row 2 */}
        <div style={{ marginBottom: "1.5rem" }}>
          <input type="text" placeholder="Division" style={{ ...inputStyle, width: "100%" }} />
        </div>

        {/* Divider */}
        <p style={{ margin: "1rem 0", fontWeight: "bold", fontSize: "15px" }}>Fill in the details</p>
        <hr style={{ marginBottom: "1.5rem" }} />

        {/* Row 3 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "1.5rem", // more spacing
            marginBottom: "2rem",
          }}
        >
          <input type="text" placeholder="Description" style={inputStyle} />
          <input type="text" placeholder="Unit" style={inputStyle} />
          <input type="number" placeholder="Quantity" style={inputStyle} />
          <input type="text" placeholder="Allocation" style={inputStyle} />
        </div>

        {/* Add Item + Supporting Document */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
          <button style={{ ...btnStyle, backgroundColor: "#E8B037" }}>+ Add Item</button>
          <button style={{ ...btnStyle, backgroundColor: "#fff", border: "1px solid #ccc" }}>
            + Add Supporting Document
          </button>
        </div>

        {/* Submit & Cancel */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <button style={{ ...btnStyle, backgroundColor: "#007A33", color: "#fff" }}>Submit</button>
          <button style={{ ...btnStyle, backgroundColor: "##E8B037" }}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

// Input style
const inputStyle = {
  padding: "12px", // taller input
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "15px",
  width: "100%",
};

// Button style
const btnStyle = {
  padding: "12px 20px", // taller buttons
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "15px",
};

export default RequestItems;
