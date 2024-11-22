import React from "react";
import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import RightSidebar from "./components/RightSidebar.jsx";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  
  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <div className="body">
        <Sidebar />
        <MainContent searchQuery={searchQuery} />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
