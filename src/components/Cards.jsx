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

function Cards() {
    const [items, setItems] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);
    // useEffect to fetch api
    useEffect(() => {
        fetch("https://bobsburgers-api.herokuapp.com/storeNextDoor")
        .then((res) => res.json())
        .then((json) => {
            // pick 12 random stores
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
                        onClick={() => console.log(`You clicked: ${item.id}`)}
                    >
                        <img src={item.image} alt={item.name} className="card-image"/>
                        <h3>{item.name}</h3>
                    </div>
                ))}
        </div>
    )
}

export default Cards;