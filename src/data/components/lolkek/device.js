import React, { Component } from 'react';

export default class Notebook extends Component {
    render (){
        var data = this.props.data;
        var notebookTamplate = this.props.data.map(function (item, index) {
            return(
                <div key={index}>
                    <p className="notebookData">{item.mark}: {item.model}</p>
                </div>
            );
        });

        return (
            <div>
                {notebookTamplate}
            </div>
        )
    }
}