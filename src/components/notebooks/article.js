import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    render (){
        var mark = this.props.data.mark,
            model = this.props.data.model,
            comment = this.props.data.comment,
            visible = this.state.visible;

        return (
            <div className={"device_notebooks " + "article "}>
                <p className="notebook_mark"><b>{mark}:</b></p>
                <p className="notebook_model">{model}</p>
                <button
                    className={'comment_readmore ' + (visible ? 'none': '')}
                    onClick={() => this.setState({visible: true})}>
                    Комментарий
                </button>
                <button
                    className={'comment_hide ' + (visible ? '': 'none')}
                    onClick={() => this.setState({visible: false})}>
                    Скрыть комментарий
                </button>
                <p className={"notebook_comment " + (visible ? "": "none")}>{comment}</p>
            </div>
        )
    }
}

Article.propTypes = {
    data: PropTypes.shape({
        mark: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired
    })
};