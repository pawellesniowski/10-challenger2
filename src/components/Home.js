import React, { Component } from 'react';
import { connect } from 'react-redux';

import {firebaseApp} from '../firebase';
import AddChallenge from './AddChallenge.js';
import ChallengeList from './ChallengeList'; 

class Home extends Component {

    signOut(){
        firebaseApp.auth().signOut();
    }

    render(){
        return (
            <div className="Home">
            <div className="page-info">
                <h2>Challenger</h2>
                <AddChallenge />
                <ChallengeList />
                <button 
                    className="button-red"
                    onClick={()=>this.signOut()}
                >
                    Sign Out
                </button>
            </div>
        
        </div>
        );
    }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps, null)(Home);