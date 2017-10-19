import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completedRef, challengeRef } from '../firebase.js';


class ChallengeItem extends Component {

    completed(){
        // add completed challenges to the database:
        console.log(this.props);
        const { email } = this.props.user;
        const { title, serverKey } = this.props.challenge;

        challengeRef.child(serverKey).remove();
        completedRef.push({email, title});
        // remove from challenges list:


    };

    render(){
        const { email, title } = this.props.challenge
        return (
            <div>
                <strong>{title}</strong>
                <span><em>{` subbmited by ${email}`} </em></span>
                <button 
                    className="button-black"
                    onClick={()=>{this.completed()}}
                >
                    completed
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