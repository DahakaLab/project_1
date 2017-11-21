import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.handleMethodEventOnClickChangeState = this.handleMethodEventOnClickChangeState.bind(this);
    }

    handleMethodEventOnClickChangeState() {
        var firstName = this.props.textMassage.firstName,
            secondName = this.props.textMassage.secondName;

        this.props.eventClick(firstName, secondName)
    }

    render() {
        return(
            <aside>
                <form name="form1">
                    <fieldset>
                        <legend>Форма ввода:</legend>
                        <p><label htmlFor="firstNameText">Имя </label><input
                            type="text"
                            value={this.props.textMassage.firstName}
                            onChange={this.props.firstNameChange}
                        /></p>
                        <p><label htmlFor="secondNameText">Фамилия </label><input
                            type="text"
                            value={this.props.textMassage.secondName}
                            onChange={this.props.secondNameChange}
                        /></p>
                    </fieldset>
                    <p><input
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