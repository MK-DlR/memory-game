// Header.jsx

import Scoreboard from "./Scoreboard";

function Header({ currentScore, highScore }) {
    return (
        <div className="header-container">
            <div className="header-top">
                <div className="header-title">
                    <h1>Bob's Burgers Memory Game</h1>
                </div>
                <Scoreboard currentScore={currentScore} highScore={highScore} />
            </div>
            <p className="header-description">Click every image once to increase your score. Clicking a previously selected image is game over!</p>
            <hr className="hr-border" />
        </div>
    )
}

export default Header;