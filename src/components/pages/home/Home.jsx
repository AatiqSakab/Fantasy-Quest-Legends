import React from "react";
import { Link } from "react-router-dom";
import GameNavbar from "../../shared/NavBar/GameNavbar"; // reuse the navbar we built
import "./Home.css";

function HomePage() {
  return (
    <div>
      <GameNavbar />
      <section className="home-banner">
        <h1>Welcome to Fantasy Quest Legends</h1>
        <p>
          Embark on an epic journey through mysterious lands, battle fierce
          enemies, and become a legend.
        </p>
        <Link to="/startpage" className="play-button">
          Start Your Adventure
        </Link>
      </section>

      <section id="overview" className="home-section">
        <h2>Game Overview</h2>
        <p>
          Quest Legends is a fantasy RPG game where you explore dungeons,
          complete quests, and battle monsters.
        </p>
      </section>

      <section id="how-to-play" className="home-section">
        <h2>How to Play</h2>
        <p>
          In Quest Legends, your journey unfolds through text-based
          storytelling. Make choices that shape your adventure!
        </p>
        <ul>
          <li>Read each scenario carefully.</li>
          <li>
            Choose your actions by selecting one of the presented options.
          </li>
          <li>
            Your decisions affect your character's journey and the story
            outcome.
          </li>
          <li>Collect items, gain experience, and unlock hidden paths!</li>
          <li>Think wisely — some choices have consequences!</li>
        </ul>
      </section>

      <section id="characters" className="home-section">
        <h2>Characters</h2>
        <p>
          Choose from Warriors, Mages, Archers — each with unique special
          ability and strengths.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
