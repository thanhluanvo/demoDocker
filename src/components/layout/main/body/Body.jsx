import React, { Component } from 'react';
import './Body.css';
import Home from '../../../pages/home/Home';

class Body extends Component {
    render() {
        return(
            <div className="Body">
                <Home/>
            </div>
        );
    }
}

export default Body;