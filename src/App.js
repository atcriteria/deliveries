import './App.css';
import Canvas from './components/Canvas';
import Game from './Classes/Game';
import { useEffect } from 'react'

function App() {
  const game = new Game();
  useEffect(() => {
    game.start();
  },[]);
  return (
    <div className="App">
      <Canvas />
    </div>
  );
}

export default App;