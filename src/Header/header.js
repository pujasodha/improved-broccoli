import React from 'react';
import './header.css';

const Header = (props) => (
    <div className="header">
        <h1>Flashcards!</h1>
        <h4>App to practice common technical interview questions</h4>
        *Some questions taken from{' '}
        <a href="https://30secondsofinterviews.org/">30 Seconds of Interviews</a>
    </div>
);

export default Header;
