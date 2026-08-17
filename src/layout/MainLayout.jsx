import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="layout">

      <Sidebar />

      <div className="main-section">

        <Header />

        <main className="page-content">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default MainLayout;