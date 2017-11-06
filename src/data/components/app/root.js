import React, { Component } from 'react';
import Header from '../header.js';
import NavLink from '../navLink';
import Content from '../root/content';
import Footer from "../footer";

export default class App extends Component {
    render() {
        return(
            <div>
                <Header/>
                <NavLink/>
                <main>
                    <article>
                        <Content/>
                    </article>
                </main>
                <Footer/>
            </div>
        )
    }
}