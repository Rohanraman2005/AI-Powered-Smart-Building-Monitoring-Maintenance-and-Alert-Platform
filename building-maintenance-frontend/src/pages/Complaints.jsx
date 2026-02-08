import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Complaints = () => {
  return (
    <div>
      <Sidebar />
      <Header />

      <div style={{marginLeft:"270px", padding:"20px"}}>
        <h2>Complaints</h2>
        <p>No complaints yet...</p>
      </div>
    </div>
  );
};

export default Complaints;
