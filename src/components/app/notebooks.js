import React, { Component } from 'react';
import Header from '../header.js';
import NavLink from '../navLink';
import Footer from "../footer";
import Content from '../notebooks/content';
import Notebook from "../notebooks/notebook";
import { notebookProps } from '../props/notebookProps.js';

export default class App extends Component {
    render() {
        return(
            <div className="notebooks_app">
                <Header/>
                <NavLink/>
                <main>
                    <article className="main_article">
                        <Content/>
                        <Notebook data={notebookProps}/>
                    </article>
                </main>
                <Footer/>
            </div>
        )
    }
}