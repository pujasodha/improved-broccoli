import React from 'react';
import './card.css';

const Card = (props) => (
    <div className="main-container">
        <div className="card">
            <div className="front-card">
                <div className="question">{props.question}</div>
            </div>
            <div className="back-card">
                <div className="answer">{props.answer}</div>
            </div>
        </div>
    </div>
);

export default Card;
