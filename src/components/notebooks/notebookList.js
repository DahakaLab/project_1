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
        console.log('Component NotebookList did mount!');
        const self = this;
        const eventEmitter = require('events').EventEmitter;
        window.ee = new eventEmitter();

        window.ee.addListener('NotebookAddEvent', function(item) {
            console.log('Event NotebookAddEvent add Listener!');
            const nextNotebook = self.state.notebooks.concat(item);
            self.setState({notebooks: nextNotebook});
        });
    }

    componentWillUnmount() {
        console.log('Component NotebookList will unmount!');
        let listener = function() {};
        window.ee.removeListener('NotebookAddEvent', listener, false);
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