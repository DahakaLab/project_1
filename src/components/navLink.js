import React, { Component } from 'react';

export default class NavLink extends Component {
    render() {
        return (
            <nav className="active">
                <li className="nav_link"><a className="article" href="/">Главная страница</a></li>
                <li className="nav_link"><a className="article" href="lolkek">Lolkek</a></li>
                <li className="nav_link"><a className="article" href="view_text">Хочешь узнать кто сегодня прекрасен?</a></li>
            </nav>
        )
    }
}