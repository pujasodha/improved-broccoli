import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Card from './Card/card';
import Button from './Button/button';

// function to randomize card that is shown, rounded to nearest whole number
const getRandomCard = (array) => {
    if (array.length === 0) {
        return new Object();
    } else {
        return array[Math.floor(Math.random() * array.length)];
    }
};

class App extends Component {
    constructor(props) {
        super(props);

        this.nextCard = this.nextCard.bind(this);

        this.state = {
            cards: [],
            currentCard: {},
        };
    }

    async componentDidMount() {
        const { data: cards } = await axios.get(
            'https://flashcards-a0449.firebaseio.com/cards.json'
        );
        this.setState({
            cards,
            currentCard: getRandomCard(cards),
        });
    }

    // When the next button is clicked, different card is shown
    nextCard() {
        this.setState({
            currentCard: getRandomCard(this.state.cards),
        });
        console.log('Next Card!');
    }

    render() {
        console.log(this.state.cards);
        return (
            <div className="App">
                <div className="card-row">
                    <Card
                        question={this.state.currentCard.question}
                        answer={this.state.currentCard.answer}
                    />
                </div>
                <div className="button-row">
                    <Button changeCard={this.nextCard} />
                </div>
            </div>
        );
    }
}

export default App;
