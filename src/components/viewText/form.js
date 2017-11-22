import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.handleMethodEventOnClickChangeState = this.handleMethodEventOnClickChangeState.bind(this);
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.firstNameText).focus();
        console.log('Component Form did mount!')
    }

    handleMethodEventOnClickChangeState() {
        var firstName = this.props.textMassage.firstName,
            secondName = this.props.textMassage.secondName;

        this.props.eventClick(firstName, secondName)
    }

    render() {
        return(
            <aside>
                <form className="form1">
                    <fieldset>
                        <legend>Форма ввода:</legend>
                        <p><label htmlFor="firstNameText"/><input
                            placeholder="Имя"
                            type="text"
                            value={this.props.textMassage.firstName}
                            onChange={this.props.firstNameChange}
                            ref="firstNameText"
                        /></p>
                        <p><label className="form1" htmlFor="secondNameText"/><input
                            placeholder="Фамилия"
                            type="text"
                            value={this.props.textMassage.secondName}
                            onChange={this.props.secondNameChange}
                            ref="secondNameText"
                        /></p>
                    </fieldset>
                    <p><input
                        className="form1_btn"
                        type="button"
                        value="Ввод"
                        id="button"
                        onClick={this.handleMethodEventOnClickChangeState}
                    /></p>
                </form>
            </aside>
        )
    }
}