import React from "react";
import "./GamePlay.css";
import GameNavbar from "../../shared/NavBar/GameNavbar";
import user from "../../../data/GameData";

export default function GamePlay() {
  let name = user.getPlayerName();
  let character = user.getcharacter();

  return (
    <div id="main">
      <GameNavbar />
      <div id="game">
        <div id="stats">
          <span className="stat">
            XP:{" "}
            <strong>
              <span id="xpText">0</span>
            </strong>
          </span>
          <span className="stat">
            Health:{" "}
            <strong>
              <span id="healthText">100</span>
            </strong>
          </span>
          <span className="stat">
            Gold:{" "}
            <strong>
              <span id="goldText">50</span>
            </strong>
          </span>
        </div>
        <div id="controls">
          <button id="button1">Go to store</button>
          <button id="button2">Go to cave</button>
          <button id="button3">Fight dragon</button>
        </div>
        <div id="monsterStats">
          <span className="stat">
            Monster Name:{" "}
            <strong>
              <span id="monsterName"></span>
            </strong>
          </span>
          <span className="stat">
            Health:{" "}
            <strong>
              <span id="monsterHealth"></span>
            </strong>
          </span>
        </div>
        <div id="text">
          Welcome to Fantasy Quest Legends {character} {name}. You must defeat
          the dragon that is <br />
          preventing people from leaving the town. You are in the town square.
          <br />
          Where do you want to go? Use the buttons above.
          <br />
        </div>
      </div>
    </div>
  );
}
