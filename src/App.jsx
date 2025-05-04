import Home from "./components/pages/home/Home";
import GamePlay from "./components/pages/game/GamePlay";
import StartPage from "./components/pages/start-page/StartPage";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/startpage" element={<StartPage />} />
        <Route path="/gameplay" element={<GamePlay />} />
      </Routes>
    </Router>
  );
}

export default App;
