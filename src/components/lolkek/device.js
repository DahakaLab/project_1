import React, { Component } from 'react';

export default class Notebook extends Component {
    render (){
        var data = this.props.data;
        var notebookTamplate;

        if (data.length > 0) {
            notebookTamplate = this.props.data.map(function (item, index) {
                return (
                    <div key={index} className={"device_lolkek " + "article "}>
                        <p className="notebook_mark"><b>{item.mark}:</b></p>
                        <p className="notebook_model">{item.model}</p>
                    </div>
                );
            });
        } else {
            notebookTamplate = <p>Записей по ноутбукам нет.</p>;
        }


        return (
            <div>
                {notebookTamplate}
                <strong className={"notebook_count " + (data.length > 0 ? "":"none")}>Всего ноутбуков: {data.length}</strong>
            </div>
        )
    }
}