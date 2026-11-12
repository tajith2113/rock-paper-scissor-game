
import { useState } from "react";
import "./App.css";

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const choices = ["Rock", "Paper", "Scissors"];

  const playGame = (choice) => {
    const computer =
      choices[Math.floor(Math.random() * choices.length)];

    setUserChoice(choice);
    setComputerChoice(computer);

    if (choice === computer) {
      setResult("It's a Draw!");
    } else if (
      (choice === "Rock" && computer === "Scissors") ||
      (choice === "Paper" && computer === "Rock") ||
      (choice === "Scissors" && computer === "Paper")
    ) {
      setResult("You Win!");
      setUserScore((score) => score + 1);
    } else {
      setResult("Computer Wins!");
      setComputerScore((score) => score + 1);
    }
  };

  const resetGame = () => {
    setUserChoice("");
    setComputerChoice("");
    setResult("");
    setUserScore(0);
    setComputerScore(0);
  };

  return (
    <div className="game-container">
      <h1>✊ Rock Paper Scissors ✋</h1>

      <div className="score-board">
        <div>
          <h2>You</h2>
          <p>{userScore}</p>
        </div>

        <div>
          <h2>Computer</h2>
          <p>{computerScore}</p>
        </div>
      </div>

      <h2>Choose Your Move</h2>

      <div className="choices">
        <button onClick={() => playGame("Rock")}>
          ✊ Rock
        </button>

        <button onClick={() => playGame("Paper")}>
          ✋ Paper
        </button>

        <button onClick={() => playGame("Scissors")}>
          ✌️ Scissors
        </button>
      </div>

      <div className="result">
        <h3>Your Choice: {userChoice || "Waiting..."}</h3>
        <h3>Computer Choice: {computerChoice || "Waiting..."}</h3>
        <h2>{result || "Let's Play!"}</h2>
      </div>

      <button className="reset-btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default App;
