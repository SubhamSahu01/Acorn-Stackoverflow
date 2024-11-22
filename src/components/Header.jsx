import React, { useState } from "react";
import "./Header.css";
import logos from "../assets/stackOverflow.webp";
import search from "../assets/search.png"

function Header({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value); 
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={logos} alt="" />
        <span className="logo-text">
          stack<span className="overflow-text">overflow</span>
        </span>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Your Answers Here..."
          className="search-bar"
          value={searchText}
          onChange={handleInputChange}
        />
        <img src={search} alt="" />
      </div>
      <div className="products-text">Products</div>
      <div className="icons">
        <img
          src="https://img.icons8.com/ios-glyphs/30/null/user-male-circle.png"
          alt="User Icon"
          className="user-icon"
        />
      </div>
    </div>
  );
}

export default Header;
