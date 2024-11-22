import React from "react";
import './RightSidebar.css'
import pen from "../assets/pen.png"
import stackoverflow from "../assets/social.png"

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="right-section">
        <h3>The Overflow Blog</h3>
        <p><img src={pen} alt="" />The unexpected benefits of mentoring others</p>
        <p><img src={pen} alt="" />Podcast 354: Building AR with Niantic Lab's augmented reality SDK</p>
      </div>
      <div className="right-section">
        <h3>Featured & Meta</h3>
        <p><img src={stackoverflow} alt="" />Beta release of Collectives on Stack overflow</p>
      </div>
      <div className="right-section">
        <h3>Hot Meta Posts</h3>
        <p><span>8</span>Tags and appear to be redundant</p>
        <p><span>27</span>How to handle dupes where A is closed as dup of B but I have an answer That..</p>
        <p><span>27</span>Ambiguous tag [container]</p>
      </div>
      <div className="right-section">
        <h3>Custom Filter</h3>
        <button>Add Custom Filters</button>
      </div>
    </div>
  );
}

export default RightSidebar;
