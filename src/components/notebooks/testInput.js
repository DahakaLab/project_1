import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class TestInput extends Component {
    constructor(props){
        super(props);

        this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
    }

    onBtnClickHandler() {
        console.log(ReactDOM.findDOMNode(this.refs.myTestInput).value);
        console.log(this.refs);
    }

    render() {
        return(
            <div>
                <input
                    className="test_input"
                    defaultValue=""
                    placeholder="Введите значение"
                    ref="myTestInput"
                />
                <button onClick={this.onBtnClickHandler} ref='alert_button'>Вывести в консоль</button>
            </div>
        )
    }
}