import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../styles/css.css';

import { firebaseApp } from '../firebase';


class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            },
            logged: false
        }
    }

    signup(){
        
        const {email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then(()=>this.setState({logged: true}))
            .catch(error=>{
                console.log("error: ", error);
                this.setState({error: error});
            });

    }



    render(){

        const {logged} = this.state;

        return (
            <div className="SignUp">
                <div className="page-info">
                    <h2>Sign up</h2>
                    <h4>Join our comunity.</h4>
                </div>
                
                <div>
                    <form>
                        
                        <input
                            type="email"
                            className="input"
                            placeholder="your e-mail"
                            onChange={e=>this.setState({email: e.target.value})}
                        />
                        <input
                            type="password"
                            className="input"
                            placeholder="choose password"
                            onChange={e=>this.setState({password: e.target.value})}
                        />
                        <button
                            className="button-black"
                            type="button"
                            onClick={()=>this.signup()}
                        >
                            Sign Up
                        </button>

                    </form>

                </div>

                <div>
                        {this.state.error.message}
                </div>
                <div>
                    <Link to={'/signin'}>If you have account already, go to sign in page!</Link>
                </div>
                {logged && (
                    <Redirect to={'/'}/>
                )}


            </div>
        );
    }
}

export default SignUp;