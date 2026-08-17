import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      title: "Dashboard",
      path: "/",
    },

    {
      title: "Appointments",
      path: "/appointments",
    },
    
    {
      title: "Consultation",
      path: "/consultation",
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>Clinic</h2>
        <span>Management</span>
      </div>

      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>

      <div className="sidebar-footer">
        <p>Desktop Version 1.0</p>
      </div>
    </div>
  );
};

export default Sidebar;
