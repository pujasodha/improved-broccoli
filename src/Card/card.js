import React from 'react';
import './card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="question">{props.question}</div>
        <div className="answer">{props.answer}</div>
    </div>
);

export default Card;
