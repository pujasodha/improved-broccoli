import React from 'react';
import './header.css';

const Header = (props) => (
    <div className="header">
        <h1>Flashcards!</h1>
        <h4>An app to practice common technical interview questions</h4>
        *Questions taken from
        <a href="https://30secondsofinterviews.org/"> 30 Seconds of Interviews</a> and
        <a href="http://thatjsdude.com/interview"> That JS Dude</a>
    </div>
);

export default Header;
