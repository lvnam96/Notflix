import React, { Component } from 'react';

import SignInForm from './components/SignInForm';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Notflix</h1>
                <SignInForm/>
            </div>
        );
    }
}

export default App;
