import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Cards from './Card/card';
import Header from './Header/header';
import NextButton from './Button/button';
import { Container, Row, Col } from 'react-bootstrap';

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
            <div className="application">
                <Header></Header>
                <Container>
                    <Row className="next-button">
                        <Col xs={6}>
                            <NextButton changeCard={this.nextCard} />
                        </Col>
                    </Row>
                    <Row className="flip-card">
                        <Col xs={6}>
                            <Flippy
                                flipOnClick={true}
                                flipOnHover={false}
                                style={{ height: 'auto', width: 'auto' }}
                                ref={(r) => (this.flippy = r)}
                            >
                                <FrontSide>
                                    Question
                                    <Cards question={this.state.currentCard.question} />
                                </FrontSide>

                                <BackSide style={{ height: 'auto' }}>
                                    Answer
                                    <Cards answer={this.state.currentCard.answer} />
                                </BackSide>
                            </Flippy>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
