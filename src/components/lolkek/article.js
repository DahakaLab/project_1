import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Article extends Component {
    render (){
        var mark = this.props.data.mark,
            model = this.props.data.model,
            comment = this.props.data.comment;

        return (
            <div className={"device_lolkek " + "article "}>
                <p className="notebook_mark"><b>{mark}:</b></p>
                <p className="notebook_model">{model}</p>
                <a href="#" className='comment_readmore'>Комментарий</a>
                <p className="notebook_comment">{comment}</p>
            </div>
        )
    }
}

Article.propTypes = {
    data: PropTypes.shape({
        mark: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired
    })
};