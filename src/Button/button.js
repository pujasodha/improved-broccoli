import React, { Component } from 'react';
import './button.css';

class Button extends Component {
    constructor(props) {
        super(props);

        this.changeCard = this.changeCard.bind(this);
    }

    changeCard() {
        this.props.changeCard();
    }

    render(props) {
        return (
            <div className="button-container">
                <button className="button" onClick={this.changeCard.bind(this)}>
                    Next
                </button>
            </div>
        );
    }
}

export default Button;
