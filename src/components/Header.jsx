// Header.jsx

import Scoreboard from "./Scoreboard";

function Header({ currentScore, highScore }) {
    return (
        <div className="header-container">
            <h1>Bob's Burgers Memory Game</h1>
            <p>Click every image once to increase your score. Clicking an already selected image is game over!</p>
            <Scoreboard currentScore={currentScore} highScore={highScore} />
        </div>
    )
}

export default Header;