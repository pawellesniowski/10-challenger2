import React, { Component } from 'react';
import '../styles/css.css';

class SignUp extends Component {
    render(){
        return (
            <div className="SignUp">
                <div className="page-info">
                    <h2>Sign up</h2>
                    <h4>Join our comunity.</h4>
                </div>
                
                <div>
                    <form>
                        
                        <input
                            type="text"
                            className="input"
                            placeholder="your name"
                        />
                        <input
                            type="email"
                            className="input"
                            placeholder="your e-mail"
                        />
                        <input
                            type="password"
                            className="input"
                            placeholder="choose password"
                        />
                        <button>Sign Up</button>
                    </form>
                </div>

            </div>
        );
    }
}

export default SignUp;