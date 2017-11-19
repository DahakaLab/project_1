import React, { Component } from 'react';
import ViewText from "./viewTextContent";
import Form from "./form";

export default class WhoBeatifull extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            secondName: '',
            text: 'Пожалуйста введи имя и фамилию...',
            name: '... мой дорогой друг.'
        };

        this.eventLogic = this.eventLogic.bind(this);
        this.firstNameChange = this.firstNameChange.bind(this);
        this.secondNameChange = this.secondNameChange.bind(this);
    }

    eventLogic (firstName, secondName) {
        console.log(firstName + ' ' + secondName);

        if (firstName === '' && secondName === '') {
            this.setState({text: 'Пожалуйста введи имя и фамилию...'});
            this.setState({name: '... ты по прежнему ничего не ввел, мой дорогой друг.'});
        } else {
            this.setState({text: 'Сегодня прекрасен:'});
            this.setState({name: firstName + ' ' + secondName});
        }
    }

    firstNameChange(event) {
        this.setState({firstName: event.target.value});
    }

    secondNameChange(event) {
        this.setState({secondName: event.target.value});
    }

    render() {
        return (
            <div className="whoBeatiful">
                <Form
                    eventClick={ this.eventLogic }
                    textMassage={ this.state }
                    firstNameChange={this.firstNameChange}
                    secondNameChange={this.secondNameChange}/>
                <ViewText textMassage={ this.state }/>
            </div>
        )
    }
}