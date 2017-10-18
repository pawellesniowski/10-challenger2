import React, { Component } from 'react';
import { connect } from 'react-redux';

import { challengeRef } from '../firebase.js';
import { actionCreatorSetChallenges } from '../actions';
import ChallengeItem from './ChallengeItem';



class ChallengeList extends Component {
    componentDidMount(){
        challengeRef.on('value', snap=>{
            let challenges = [];
            snap.forEach(challenge=>{
                const { email, title } = challenge.val();
                challenges.push({email, title});
            });
            this.props.actionCreatorSetChallenges(challenges);
        })
    }

    render(){
        const {challenges} = this.props
        return(
            <div>
                {challenges.reverse().map((challenge, index)=>{
                    return(
                        <ChallengeItem challenge={challenge} key={index} />
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps(state){
    const { challenges } = state;
    return {
        challenges
    }
}

export default connect(mapStateToProps, {actionCreatorSetChallenges})(ChallengeList);