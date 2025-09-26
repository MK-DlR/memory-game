// Cards.jsx

const cardArray = [
        {
            id: "1",
            text: "test text 1",
            image: "image will go here",
        },
        {
            id: "2",
            text: "test text 2",
            image: "image will go here",
        },
        {
            id: "3",
            text: "test text 3",
            image: "image will go here",
        },
        {
            id: "4",
            text: "test text 4",
            image: "image will go here",
        },
        {
            id: "5",
            text: "test text 5",
            image: "image will go here",
        },
        {
            id: "6",
            text: "test text 6",
            image: "image will go here",
        },
        {
            id: "7",
            text: "test text 7",
            image: "image will go here",
        },
        {
            id: "8",
            text: "test text 8",
            image: "image will go here",
        },
        {
            id: "9",
            text: "test text 9",
            image: "image will go here",
        },
        {
            id: "10",
            text: "test text 10",
            image: "image will go here",
        },
        {
            id: "11",
            text: "test text 11",
            image: "image will go here",
        },
        {
            id: "12",
            text: "test text 12",
            image: "image will go here",
        },
    ];

function Cards() {
    return (
        <div className="card-container">
                {cardArray.map(card => (
                    <div key={card.id} className="card-single">
                        <p>{card.image}</p>
                        <h3>{card.text}</h3>
                    </div>
                ))}
        </div>
    )
}

export default Cards;