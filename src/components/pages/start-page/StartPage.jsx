import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./StartPage.css";
import user from "../../../data/GameData";

function StartPage() {
  const [name, setName] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  //const navigate = useNavigate();
  const navigate = useNavigate();

  const handleStart = () => {
    if (!name || !selectedClass) {
      alert("Please enter a name and choose a class!");
      return;
    }

    user.setPlayerName(name);
    user.setcharacter(selectedClass);
    alert(name + selectedClass);
    navigate("/gameplay");
  };

  return (
    <div className="start-page">
      <div className="start-container">
        <h1>⚔️ Fantasy Quest Legends</h1>
        <input
          id="user-name"
          type="text"
          placeholder="Enter your character name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="name-input"
        />

        <div className="class-selection">
          <label>
            <input
              type="radio"
              name="class"
              value="Warrior"
              onChange={(e) => setSelectedClass(e.target.value)}
            />
            🛡 Warrior
          </label>
          <label>
            <input
              type="radio"
              name="class"
              value="Mage"
              onChange={(e) => setSelectedClass(e.target.value)}
            />
            🔮 Mage
          </label>
          <label>
            <input
              type="radio"
              name="class"
              value="Archer"
              onChange={(e) => setSelectedClass(e.target.value)}
            />
            🏹 Archer
          </label>
        </div>

        <button className="start-button" onClick={handleStart}>
          Start Game
        </button>
      </div>
    </div>
  );
}

export default StartPage;
