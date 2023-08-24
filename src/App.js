
import StartGame from './componenet/StartGame';
import Game from './componenet/Game';
import { useState } from 'react';


function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartClick = () => {
    setGameStarted(prevState => !prevState);
  };

  return (
    <div>
      {gameStarted ? <Game /> : <StartGame toggle={handleStartClick} />}
    </div>
  );
}

export default App;
