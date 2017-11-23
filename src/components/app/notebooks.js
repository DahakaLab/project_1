import React, { Component } from 'react';
import Header from '../header.js';
import NavLink from '../navLink';
import Footer from "../footer";
import Content from '../notebooks/content';
import NotebookList from "../notebooks/notebookList";

export default class App extends Component {
    render() {
        return(
            <div className="notebooks_app">
                <Header/>
                <NavLink/>
                <main>
                    <article className="main_article">
                        <Content/>
                        <NotebookList/>
                    </article>
                </main>
                <Footer/>
            </div>
        )
    }
}