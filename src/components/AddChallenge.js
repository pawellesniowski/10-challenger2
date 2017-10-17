import React, { Component } from 'react';
import {connect} from 'react-redux';
import { challengeRef } from '../firebase';

class AddChallenge extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: ""
        }
    }

    addChallenge(){
        const { title } = this.state;
        const { email } = this.props.user;
        challengeRef.push({email, title});
    }

    render(){
        return(
            <div className="form-inline">
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Add a challenge"
                        className="form-control"    
                        onChange={event=>this.setState({title: event.target.value})}
                    />
                    <button
                            className="button-black"
                            type="button"
                            onClick={()=>this.addChallenge()}
                    >
                            Subbmit
                    </button>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state){
    const { user } = state;
    return { 
        user
    }
}

export default connect(mapStateToProps, null)(AddChallenge);