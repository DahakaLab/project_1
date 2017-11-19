import React, { Component } from 'react';

export default class Form extends Component {
    render (){
        var firstName = this.props.textMassage.firstName,
            secondName = this.props.textMassage.secondName;
        return(
            <aside>
                <form name="form1">
                    <fieldset>
                        <legend>Форма ввода:</legend>
                        <p><label htmlFor="firstNameText">Имя </label><input
                            type="text"
                            value={firstName}
                            onChange={this.props.firstNameChange}
                        /></p>
                        <p><label htmlFor="secondNameText">Фамилия </label><input
                            type="text"
                            value={secondName}
                            onChange={this.props.secondNameChange}
                        /></p>
                    </fieldset>
                    <p><input
                        type="button"
                        value="Ввод"
                        id="button"
                        onClick={() => {this.props.eventClick(firstName, secondName)}}
                    /></p>
                </form>
            </aside>
        )
    }
}