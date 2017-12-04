import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavLink extends Component {
    render() {
        return(
            <nav className="active">
                <li className="nav_link"><Link className="article" to="/">Главная</Link></li>
                <li className="nav_link"><Link className="article" to="/notebooks">Ноутбуки</Link></li>
                <li className="nav_link"><Link className="article" to="/view_text">Хочешь узнать кто сегодня прекрасен?</Link></li>
            </nav>
        )
    }
}