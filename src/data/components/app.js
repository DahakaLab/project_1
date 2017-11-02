import React, { Component } from 'react';
import Header from './header.js';
import NavLink from './navLink';

export default class App extends Component {
    render() {
        return(
            <div>
                <Header/>
                <NavLink/>
            </div>
        )
    }
}