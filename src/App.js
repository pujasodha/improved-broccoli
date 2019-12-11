import React, { Component } from 'react';
import './App.css';
import Card from './Card/card';

const getRandomCard = (someArray) => {
    return someArray[Math.floor(Math.random() * someArray.length)];
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
