import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCards from "../components/DashboardCards";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <DashboardCards />
    </div>
  );
};

export default Dashboard;
