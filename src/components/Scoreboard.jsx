// Scoreboard.jsx

function Scoreboard({ currentScore, highScore }) {
    return (
        <div className="score-container">
            <strong>Score:</strong> {currentScore}<br />
            <strong>Best Score:</strong> {highScore}
        </div>
    )
}

export default Scoreboard;