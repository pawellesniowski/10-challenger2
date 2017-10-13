import React, { Component } from 'react';
import '../styles/css.css';

class SignIn extends Component {
    render(){
        return (
            <div className="SignIn">
                <div className="page-info">
                    <h2>Sign In</h2>
                    <h4>To check for challenges.</h4>
                </div>
            
                <div>
                    <form>
                        <input
                            type="email"
                            className="input"
                            placeholder="e-mail"
                        />
                        <input
                            type="password"
                            className="input"
                            placeholder="password"
                        />
                        <button>Sign Up</button>
                    </form>
                </div>

        </div>
        );
    }
}

export default SignIn;