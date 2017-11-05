import React, { Component } from 'react';
import Header from '../header.js';
import NavLink from '../navLink';
import Content from '../viewText/content';
import Form from "../viewText/form";
import ViewText from "../viewText/viewTextContent";

export default class App extends Component {
    render() {
        return(
            <div>
                <Header/>
                <NavLink/>
                <Content/>
                <Form/>
                <ViewText/>
            </div>
        )
    }
}