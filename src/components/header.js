import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>
                    <img src="http://s1.iconbird.com/ico/2013/9/450/w256h2561380453904Leaf256x25632.png" alt="Logo" id="LogoPNG" className="logo_header" />Чай
                </h1>
                <p>Чайный сервис</p>
            </header>
        )
    }
}