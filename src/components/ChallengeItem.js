import React, { Component } from 'react';
import { connect } from 'react-redux';

import { complitedRef } from '../firebase.js';


class ChallengeItem extends Component {

    complited(){
        // add complited challenges to the database:
        console.log(this.props);
        const { email } = this.props.user;
        const { title } = this.props.challenge;
        complitedRef.push({email, title});
        // remove from 
    };

    render(){
        const { email, title } = this.props.challenge
        return (
            <div>
                <strong>{title}</strong>
                <span><em>{` subbmited by ${email}`} </em></span>
                <button 
                    className="button-black"
                    onClick={()=>{this.complited()}}
                >
                    Complited
                </button>
            </div>
        );
    }
}

function mapStatehToProps(globalState){
    const {user} = globalState;
    return {
        user
    } 
}

export default connect(mapStatehToProps, null)(ChallengeItem);