import React from "react";
import "./PropBox.css";

function PropBox({ PlayerID, pType, pLine, pImageUrl }) {
  const over = Math.floor(Math.random() * 100);
  const under = 100 - over;
  return (
    <div className="p-box">
      <div className="p-name">{PlayerID}</div>
      <div className="p-stat">{pType}</div>
      <div className="p-line">{pLine}</div>
      <div className="p-picture">
        <img src={pImageUrl} alt="player" />
      </div>
      <div className="over-under">
        <div className="over">{over}% +</div>
        <div className="under">{under}%-</div>
      </div>
    </div>
  );
}

export default PropBox;
