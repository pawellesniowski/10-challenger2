import React, { Component } from 'react';

class ChallengeItem extends Component {
    render(){
        const { email, title } = this.props.challenge
        return (
            <div>
                <strong>{title}</strong>
                <span><em>{` subbmited by ${email}`} </em></span>
            </div>
        );
    }
}

export default ChallengeItem;