import './App.css';
import CrossRoads from './components/CrossRoads';
import Menu from './components/menu/Menu';
import ScorePanel from './components/scorepanel/ScorePanel';

function App() {
  return (
    <main className="main_cont">
      <Menu />
      <CrossRoads />
      <ScorePanel />
    </main>
  );
}

export default App;

