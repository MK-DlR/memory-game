// Scoreboard.jsx

function Scoreboard({ currentScore, highScore }) {
    return (
        <div className="score-container">
            <b>Score:</b> {currentScore}<br />
            <b>Best Score:</b> {highScore}
        </div>
    )
}

export default Scoreboard;