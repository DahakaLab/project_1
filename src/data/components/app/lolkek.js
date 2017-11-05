import React, { Component } from 'react';
import Header from '../header.js';
import NavLink from '../navLink';
import Content from '../lolkek/content';

export default class App extends Component {
    render() {
        return(
            <div>
                <Header/>
                <NavLink/>
                <Content/>
            </div>
        )
    }
}