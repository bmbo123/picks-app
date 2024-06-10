import React from "react";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import PropBox from "./components/PropBox";
import { useState } from "react";
import { useEffect } from "react";
import jsonData from "./response.json";
import "./App.css";
const url =
  "https://api.prizepicks.com/projections?league_id=7&per_page=250&single_stat=true&projection_type_id=1&sort=player_name";
function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(jsonData.included);
  }, []);
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <SideNav />
        <div className="prop-list">
          {players.map((player) => (
            <PropBox
              PlayerID={
                player.attributes.combo
                  ? player.attributes.display_name
                  : player.attributes.name
              }
              pType={player.attributes.stat_type}
              pLine={player.attributes.line_score}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
