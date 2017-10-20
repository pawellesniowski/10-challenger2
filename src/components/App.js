import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';


import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';

class App extends Component {
    render(){
        return (
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/signup" component={SignUp}/>
                        <Route path="/signin" component={SignIn}/>
                    </Switch>
                </HashRouter>
        );
    }
}

export default App;