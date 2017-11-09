import React, { Component } from 'react';
import Header from '../header.js';
import NavLink from '../navLink';
import Content from '../viewText/content';
import Form from "../viewText/form";
import ViewText from "../viewText/viewTextContent";
import Footer from "../footer";

export default class App extends Component {
    render() {
        return(
            <div className="viewTextApp">
                <Header/>
                <NavLink/>
                <main>
                    <article>
                        <Content/>
                        <Form/>
                        <ViewText/>
                    </article>
                </main>
                <Footer/>
            </div>
        )
    }
}