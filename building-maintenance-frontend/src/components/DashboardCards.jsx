import React from "react";

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "200px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};

const DashboardCards = () => {
  return (
    <div style={{
      marginLeft: "270px",
      marginTop: "20px",
      display: "flex",
      gap: "20px"
    }}>
      <div style={cardStyle}>
        <h3>⚡ Active Devices</h3>
        <h2>45</h2>
      </div>

      <div style={cardStyle}>
        <h3>⚠ Complaints</h3>
        <h2>6</h2>
      </div>

      <div style={cardStyle}>
        <h3>👷 Workers Available</h3>
        <h2>12</h2>
      </div>
    </div>
  );
};

export default DashboardCards;
