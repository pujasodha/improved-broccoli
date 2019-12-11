import React, { Component } from 'react';
import './App.css';
import Card from './Card/card';

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

    // define constant before component is ready to mount
    componentWillMount() {
        const currentCards = this.state.cards;
        this.setState({
            cards: currentCards,
            currentCard: this.getRandomCard(currentCards),
        });
        console.log(currentCards);
    }

    // getRandomCard function
    getRandomCard(randomCard) {
        // randomize by whole numbers
        var card = currentCards[Math.floor(Math.random() * currentCards.length)];
        return card;
    }

    render() {
        return (
            <div className="App">
                <Card
                    question={this.state.currentCard.question}
                    answer={this.state.currentCard.answer}
                />
            </div>
        );
    }
}

export default App;
