import { Link } from "react-router-dom";
import "./GameNavbar.css";

function GameNavbar() {
  return (
    <nav className="game-navbar">
      <div className="game-logo">⚔️ Fantasy Quest Legends</div>
      <ul className="game-links">
        <li>
          <a href="#overview">Overview</a>
        </li>
        <li>
          <a href="#how-to-play">How to Play</a>
        </li>
        <li>
          <a href="#characters">Characters</a>
        </li>
        <li>
          <Link to="/startpage" className="start-button">
            Start Game
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default GameNavbar;
