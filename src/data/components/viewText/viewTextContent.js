import React, { Component } from 'react';

export default class ViewText extends Component {
    render (){
        return(
            <div>
                <div id="massage" className="color_font_green">Пожалуйста введи имя и фамилию...</div>
                <div id="nameout" className="color_font_red">... мой дорогой друг.</div>
            </div>
        )
    }
}