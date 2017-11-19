import React, { Component } from 'react';
import Header from '../header.js';
import NavLink from '../navLink';
import Content from '../viewText/content';
import Footer from "../footer";
import WhoBeatifull from "../viewText/whoBeatifull";

export default class App extends Component {
    render() {
        return(
            <div className="view_text_app">
                <Header/>
                <NavLink/>
                <main>
                    <article>
                        <Content/>
                        <WhoBeatifull/>
                    </article>
                </main>
                <Footer/>
            </div>
        )
    }
}