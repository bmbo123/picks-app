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
  const [playerMap, setPlayerMap] = useState(new Map());

  useEffect(() => {
    const playerMap = new Map();
    for (let i = 0; i < jsonData.included.length; i++) {
      if (jsonData.included[i].type === "new_player") {
        playerMap.set(jsonData.included[i].id, {
          name: jsonData.included[i].attributes.name,
          id: jsonData.included[i].attributes.image_url,
          combo: jsonData.included[i].attributes.combo,
        });
      }
    }
    setPlayers(jsonData.data);
    setPlayerMap(playerMap);
    console.log(playerMap);
  }, []);
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <SideNav />
        <div className="prop-list">
          {players.map((player) => {
            const pID = player.relationships.new_player.data.id;
            const pImage = playerMap.get(pID).id;
            const pType = player.attributes.stat_type;
            const pLine = player.attributes.line_score;
            if (pID && playerMap.has(pID)) {
              const playerData = playerMap.get(pID);
              return (
                <PropBox
                  PlayerID={playerData.name}
                  pType={pType}
                  pLine={pLine}
                  pImageUrl={pImage}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
