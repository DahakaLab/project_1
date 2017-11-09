import React, { Component } from 'react';

export default class NavLink extends Component {
    render() {
        return (
            <nav className="active">
                <li><a href="/">Главная страница</a></li>
                <li><a href="lolkek">Lolkek</a></li>
                <li><a href="view_text">Хочешь узнать кто сегодня прекрасен?</a></li>
            </nav>
        )
    }
}