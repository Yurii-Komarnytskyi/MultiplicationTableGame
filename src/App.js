import './App.css';
import GameContainer from './components/game_comp/GameContainer';
import ScorePanel from './components/scorepanel/ScorePanel';

function App() {
  return (
    <main className="main_cont">
      <GameContainer />
      <ScorePanel />
    </main>
  );
}

export default App;

