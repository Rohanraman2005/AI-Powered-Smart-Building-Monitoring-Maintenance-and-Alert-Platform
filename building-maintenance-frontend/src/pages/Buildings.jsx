import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Buildings = () => {
  return (
    <div>
      <Sidebar />
      <Header />

      <div style={{marginLeft:"270px", padding:"20px"}}>
        <h2>Buildings</h2>
        <p>Building details will appear here.</p>
      </div>
    </div>
  );
};

export default Buildings;
