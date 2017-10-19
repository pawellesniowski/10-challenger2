import React, { Component } from 'react';
import { completedRef } from '../firebase';
import { setCompleted } from '../actions';
import { connect } from 'react-redux';

class CompletedList extends Component {

    componentDidMount(){
        completedRef.on('value', snap=>{
            let completedChallenges = [];
            snap.forEach(completedChallenge => {
                const {email, title } = completedChallenge.val();
                completedChallenges.push({email, title});
            });

            this.props.setCompleted(completedChallenges);
        });
    };

    clearCompleted(){
        completedRef.set([]);
    }

    render(){
        return(
            <div>
                { 
                    this.props.completedChallenges.map((completedChallenge, index)=>{
                        const {title, email} = completedChallenge;
                        return(
                            <div key={index}>
                                <strong>{title}</strong> completed by <em>{email}</em>
                            </div>
                        );
                    })
                } 
                <button
                    className="button-black"
                    onClick={()=>{this.clearCompleted()}}
                >
                    Clear Completed
                </button>
            </div>
        );

    }
}

function mapStateToProps(globalState){
    const { completedChallenges } = globalState;
    return {
        completedChallenges
    }
}

export default connect(mapStateToProps, { setCompleted })(CompletedList);