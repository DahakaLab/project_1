import React, { Component } from 'react';
import NotebookContent from '../notebooks/content';
import NotebookList from "../notebooks/notebookList";

export default class Notebooks extends Component {
    render() {
        return(
            <div className="notebooks_app">
                <main>
                    <article className="main_article">
                        <NotebookContent/>
                        <NotebookList/>
                    </article>
                </main>
            </div>
        )
    }
}