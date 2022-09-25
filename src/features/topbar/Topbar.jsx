import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
import { menuItems } from "./menuItem";
import MenuItems from "../../components/MenuItems";

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="topbarLogo">Sushi Bar</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <nav>
          <ul className="menus">
            {menuItems.map((menu, index) => {
              return <MenuItems items={menu} key={index} />;
            })}
          </ul>
        </nav>
      </div>
      <div className="topbarRight">
        <Link to="/uber" style={{ textDecoration: "none" }}>
          <span className="topbarOrderOnline">Order Online</span>
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
