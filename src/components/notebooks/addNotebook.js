import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AddNotebook extends Component {
    constructor(props){
        super(props);
        this.state = {
            markIsEmpty: true,
            modelIsEmpty: true,
            textIsEmpty: true,
            notChecked: true
        };

        this.notebookFormClickBtn = this.notebookFormClickBtn.bind(this);
        this.notebookFormCheckbox = this.notebookFormCheckbox.bind(this);
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.mark).focus();
    }

    notebookFormClickBtn(e) {
        e.preventDefault();

        let mark = ReactDOM.findDOMNode(this.refs.mark),
            model = ReactDOM.findDOMNode(this.refs.model),
            textComment = ReactDOM.findDOMNode(this.refs.text_comment);

        const item = [{
            mark: mark.value,
            model: model.value,
            comment: textComment.value
        }];

        window.ee.emit('NotebookAddEvent', item);

        textComment.value = model.value = mark.value = '';
        this.setState({
            markIsEmpty: true,
            modelIsEmpty: true,
            textIsEmpty: true
        });
    }

    notebookFormCheckbox(){
        this.setState({notChecked: !this.state.notChecked})
    }

    notebookFormFieldChange(fieldName, e){
        const next = {};

        if (e.target.value.trim().length > 0) {
            next[fieldName] = false;
            this.setState(next);
        } else {
            next[fieldName] = true;
            this.setState(next);
        }
    }

    render() {
        return(
            <aside className="asside_add_notebook">
                <h3>Создание нового ноутбука:</h3>
                <form className="add_notebook cf">
                    <input
                        type="text"
                        className="add_mark"
                        onChange={this.notebookFormFieldChange.bind(this, 'markIsEmpty')}
                        placeholder="Введите марку"
                        ref="mark"
                    />
                    <input
                        type="text"
                        className="add_model"
                        onChange={this.notebookFormFieldChange.bind(this, 'modelIsEmpty')}
                        placeholder="Введите модель"
                        ref="model"
                    />
                    <textarea
                        className="add_comment"
                        onChange={this.notebookFormFieldChange.bind(this, 'textIsEmpty')}
                        placeholder="Текс комментария"
                        ref="text_comment"
                    />
                    <label className="add_chekrule">
                        <input
                            onClick={this.notebookFormCheckbox}
                            type="checkbox"
                            defaultChecked={false}
                            ref="chekrule"
                        />
                        Я уверен в этом!
                    </label>
                    <button
                        className="add_comment_btn"
                        onClick={this.notebookFormClickBtn}
                        ref="alert_button"
                        disabled={this.state.modelIsEmpty || this.state.markIsEmpty || this.state.textIsEmpty || this.state.notChecked}>
                        <b>Добавить ноутбук в список</b>
                    </button>
                </form>
            </aside>
        )
    }
}