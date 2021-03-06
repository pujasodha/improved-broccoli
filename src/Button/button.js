import React, { Component } from 'react';
import './button.css';
import { Button } from 'react-bootstrap';

class NextButton extends Component {
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
                <Button className="button" onClick={this.changeCard.bind(this)} variant="light">
                    Next
                </Button>
            </div>
        );
    }
}

export default NextButton;
