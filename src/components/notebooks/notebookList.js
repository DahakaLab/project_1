import React, { Component } from 'react';
import Notebook from "../notebooks/notebook";
import { notebookProps } from '../props/notebookProps.js';
import AddNotebook from "../notebooks/addNotebook";

export default class NotebookList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            notebooks: notebookProps
        };
    }

    componentDidMount() {
        var self = this;
        var EventEmitter = require('events').EventEmitter;
        window.ee = new EventEmitter();

        window.ee.addListener('Notebook.add', function(item) {
            var nextNotebook = item.concat(self.state.notebooks);
            self.setState({notebooks: nextNotebook});
        });
    }

    componentWillUnmount() {
        window.ee.removeEventListener('Notebook.add');
    }

    render() {
        return(
            <div className="div_notebook_list">
                <AddNotebook/>
                <Notebook data={this.state.notebooks}/>
            </div>
        )
    }
}