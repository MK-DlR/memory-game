// Cards.jsx

import { useState, useEffect } from "react";

function getRandomItems(array, count) {
    // make a copy to not modify the original
    const shuffled = [...array];
    
    // fisher-yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
    }
    
    // return the first 'count' items
    return shuffled.slice(0, count);
}

function Cards({ currentScore, updateScore, resetGame }) {
    const [allItems, setAllItems] = useState([]);
    const [items, setItems] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);
    const [selectedCard, setSelectedCard] = useState([]);

    // useEffect to fetch api
    useEffect(() => {
        fetch("https://bobsburgers-api.herokuapp.com/storeNextDoor")
        .then((res) => res.json())
        .then((json) => {
            setAllItems(json); // store the full response
            const randomSelection = getRandomItems(json, 12);
            setItems(randomSelection);
            setDataIsLoaded(true);
        });
    }, []);
    // loading message
    if (!dataIsLoaded) {
        return (
            <div>
                <h1 className="loading">Loading game...</h1>
            </div>
        )
    }

    return (
        <div className="card-container">
                {items.map(item => (
                    <div 
                        key={item.id} 
                        className="card-single"
                        onClick={() => 
                            {
                                console.log(`You clicked: ${item.id}`)
                                
                                if (selectedCard.includes(item.id)) {
                                    // card was already clicked - game over logic
                                    alert("Game over!");
                                    resetGame();
                                    setSelectedCard([]); // clear array
                                    const newRandomSelection = getRandomItems(allItems, 12);
                                    setItems(newRandomSelection);
                                } else {
                                    // card hasn't been clicked - continue game logic
                                    setSelectedCard([...selectedCard, item.id]); // add selected card to array
                                    updateScore();
                                    
                                    // check win condition using selectedCard length + 1 (to account for react delay)
                                    if (selectedCard.length + 1 === 12) {
                                        alert("You win!");
                                        resetGame();
                                        setSelectedCard([]); // clear array
                                        const newRandomSelection = getRandomItems(allItems, 12);
                                        setItems(newRandomSelection);
                                        return; // exit early to not shuffle cards
                                    }

                                    // make a copy to not modify the original
                                        const shuffled = [...items];
                                        
                                        // fisher-yates shuffle algorithm
                                        for (let i = shuffled.length - 1; i > 0; i--) {
                                            const randomIndex = Math.floor(Math.random() * (i + 1));
                                            [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
                                        }
                                        setItems(shuffled);
                                }
                            }
                        }
                    >
                        <img src={item.image} alt={item.name} className="card-image"/>
                        <h3>{item.name}</h3>
                    </div>
                ))}
        </div>
    )
}

export default Cards;