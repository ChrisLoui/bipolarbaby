import React, { useState } from 'react';
import './CoinToss.css';

const CoinTossGame = () => {
  const [result, setResult] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const tossCoin = () => {
    setIsFlipping(true);

    // Simulate coin toss delay
    setTimeout(() => {
      const randomResult = Math.random() < 0.5 ? 'Heads' : 'Tails';
      setResult(randomResult);
      setIsFlipping(false);
    }, 2000); // Coin flipping animation duration
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Coin Toss Game</h1>
      <div className={`coin ${isFlipping ? 'flipping' : ''} ${result}`}>
        <div className="side heads">Heads</div>
        <div className="side tails">Tails</div>
      </div>
      <button
        onClick={tossCoin}
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600"
        disabled={isFlipping} // Disable button during flip
      >
        {isFlipping ? 'Flipping...' : 'Toss the Coin'}
      </button>
    </div>
  );
};

export default CoinTossGame;