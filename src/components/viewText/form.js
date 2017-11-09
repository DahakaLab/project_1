import React, { Component } from 'react';

export default class Form extends Component {
    render (){
        return(
            <aside>
                <form name="form1">
                    <fieldset>
                        <legend>Форма ввода:</legend>
                        <p><label htmlFor="firstNameText">Имя </label><input type="text" id="firstNameText" name="firstNameText"></input></p>
                        <p><label htmlFor="secondNameText">Фамилия </label><input type="text" id="secondNameText"></input></p>
                    </fieldset>
                    <p><input type="button" value="Ввод" id="button"></input></p>
                </form>
            </aside>
        )
    }
}