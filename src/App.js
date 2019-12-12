import React, { Component } from 'react';
import './App.css';
import Card from './Card/card';
import Button from './Button/button';
// function to randomize card that is shown, rounded to nearest whole number
const getRandomCard = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { id: 1, question: 'Question1', answer: 'Answer1' },
                { id: 2, question: 'Question2', answer: 'Answer2' },
            ],
            currentCard: {},
        };
    }

    componentDidMount() {
        const currentCards = this.state.cards;
        this.setState({
            cards: currentCards,
            currentCard: getRandomCard(currentCards),
        });
    }

    // When the next button is clicked, different card is shown
    nextCard() {
        const currentCards = this.state.cards;
        this.setState({
            cards: currentCards,
            currentCard: getRandomCard(currentCards),
        });
        console.log('Next Card!');
    }

    render() {
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
