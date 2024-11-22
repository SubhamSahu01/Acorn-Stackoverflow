import React from "react";
import "./Sidebar.css";
import home from "../assets/house.png"
import publics from "../assets/planet-earth.png"
import collections from "../assets/star-inside-circle.png"
import job from "../assets/briefcase.png"
import team from "../assets/group.png"

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="menu">
        <li className="menu-item selected"><img src={home} alt=""/>Home</li>
        <li className="menu-item"><img src={publics} alt=""/>Public</li>
        <ul className="submenu">
          <li className="submenu-item">Questions</li>
          <li className="submenu-item">Tags</li>
          <li className="submenu-item">Users</li>
        </ul>
        <li className="menu-item"><img src={collections} alt=""/>Collectives</li>
        <ul className="submenu">
          <li className="submenu-item">Explore Jobs</li>
        </ul>
        <li className="menu-item"><img src={job} alt=""/>Find Jobs</li>
        <ul className="submenu">
          <li className="submenu-item">Jobs</li>
          <li className="submenu-item">Companies</li>
        </ul>
        <li className="menu-item"><img src={team} alt=""/>Teams</li>
        <ul className="submenu">
          <li className="submenu-item">create a team</li>
        </ul>
      </ul>
    </div>
  );
}

export default Sidebar;
