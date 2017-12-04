import React, { Component } from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import NavLink from "../components/navLink";
import Main from "../components/app/main";

export default class App extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <NavLink/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}