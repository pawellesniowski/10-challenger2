import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/css.css';
import {firebaseApp} from '../firebase';


class SignIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signIn(){
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error=>{
                this.setState({error})
            })

    }

    render(){
        return (
            <div className="SignIn">
                <div className="page-info">
                    <h2>Sign in</h2>
                    <h4>To check for challenges.</h4>
                </div>
            
                <div>
                    <form>
                        <input
                            type="email"
                            className="input"
                            placeholder="email"
                            onChange={e=>this.setState({email: e.target.value})}
                        />
                        <input
                            type="password"
                            className="input"
                            placeholder="password"
                            onChange={e=>this.setState({password: e.target.value})}
                        />
                        <button
                        type="button"
                            onClick={()=>this.signIn()}
                        >
                            Sign In
                        </button>
                    </form>

                </div>

                <div>
                    {this.state.error.message}
                </div>
                <div><Link to={'/signup'}>Dont hava an accout? Go to sign up page.</Link></div>
        </div>
        );
    }
}

export default SignIn;