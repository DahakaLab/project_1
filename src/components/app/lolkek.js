import React, { Component } from 'react';
import Header from '../header.js';
import NavLink from '../navLink';
import Content from '../lolkek/content';
import Footer from "../footer";
import Notebook from "../lolkek/device";
import { notebookProps } from '../props/notebookProps.js';

export default class App extends Component {
    render() {
        return(
            <div className="lolkekApp">
                <Header/>
                <NavLink/>
                <main>
                    <article>
                        <Content/>
                        <Notebook data={notebookProps}/>
                    </article>
                </main>
                <Footer/>
            </div>
        )
    }
}