import React from "react";
import "./Header.css";

const Header = () => {
  const today = new Date();

  const currentDate = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="header">

      <div className="header-left">
        {/* <button className="menu-btn">
          ☰
        </button> */}

        {/* <input
          type="text"
          placeholder="Search Patient..."
          className="search-box"
        /> */}
      </div>

      <div className="header-right">

        <div className="date-box">
          {currentDate}
        </div>

        <div className="doctor-info">
          <div className="doctor-avatar">
            D
          </div>

          <div>
            <h4>Dr. Admin</h4>
            <span>Doctor</span>
          </div>
        </div>

      </div>

    </header>
  );
};

export default Header;