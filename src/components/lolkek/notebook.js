import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from "./article";

export default class Notebook extends Component {
    render (){
        var data = this.props.data;
        var notebookTamplate;

        if (data.length > 0) {
            notebookTamplate = this.props.data.map(function (item, index) {
                return (
                    <div key={index}>
                        <Article data={item}/>
                    </div>
                );
            });
        } else {
            notebookTamplate = <p>Записей по ноутбукам нет.</p>;
        }

        return (
            <div>
                <h3 className={data.length > 0 ? "": "none"}>Список ноутов:</h3>
                {notebookTamplate}
                <strong className={"notebook_count " + (data.length > 0 ? "":"none")}>Всего ноутбуков: {data.length}</strong>
            </div>
        );
    }
}

Notebook.propTypes = {
    data: PropTypes.array.isRequired
};
