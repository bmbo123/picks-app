import React from "react";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import PropBox from "./components/PropBox";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <SideNav />
        <div className="prop-list">
          <PropBox />
          <PropBox />
          <PropBox />
          <PropBox />
          <PropBox />
          <PropBox />
          <PropBox />
          <PropBox />
          <PropBox />
          <PropBox />
          <PropBox />
          <PropBox />
          <PropBox />
          <PropBox />
          <PropBox />
          <PropBox />
        </div>
      </div>
    </div>
  );
}

export default App;
