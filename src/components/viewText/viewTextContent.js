import React, { Component } from 'react';

export default class ViewText extends Component {
    render() {
        return(
            <div className="content_view_text">
                <div id="massage" className="color_font_green">{this.props.textMassage.text}</div>
                <div id="nameout" className="color_font_red">{this.props.textMassage.name}</div>
            </div>
        )
    }
}