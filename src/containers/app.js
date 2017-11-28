import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/header";
import Footer from "../components/footer";

export default class App extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <nav className="active">
                    <li className="nav_link"><Link className="article" to="/">Главная</Link></li>
                    <li className="nav_link"><Link className="article" to="/notebooks">Ноутбуки</Link></li>
                    <li className="nav_link"><Link className="article" to="/view_text">Хочешь узнать кто сегодня прекрасен?</Link></li>
                </nav>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}