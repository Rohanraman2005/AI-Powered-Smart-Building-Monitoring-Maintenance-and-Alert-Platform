import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Workers = () => {
  return (
    <div>
      <Sidebar />
      <Header />

      <div style={{marginLeft:"270px", padding:"20px"}}>
        <h2>Workers</h2>
        <p>Worker list will appear here.</p>
      </div>
    </div>
  );
};

export default Workers;
