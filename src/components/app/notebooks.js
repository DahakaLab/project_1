import React, { Component } from 'react';
import Content from '../notebooks/content';
import NotebookList from "../notebooks/notebookList";

export default class Notebooks extends Component {
    render() {
        return(
            <div className="notebooks_app">
                <main>
                    <article className="main_article">
                        <Content/>
                        <NotebookList/>
                    </article>
                </main>
            </div>
        )
    }
}