import React, {Component} from 'react';
import Card from './card';

import Navbar from './navbar';

class App extends Component{
    state = {};

    render(){
        return (
            <div>
                <Navbar/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    }
}

export default App;