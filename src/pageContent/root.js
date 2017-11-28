import './../style/style.css';
import 'babel-polyfill';
import React from 'react';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import { titleNode } from '../nodes/titleNode.js';
import ViewText from '../components/app/viewText.js';
import Notebooks from '../components/app/notebooks.js';
import App from "../containers/app";
import Home from "../components/app/home";

(function() {
    titleNode();

    render(
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/notebooks" component={Notebooks}/>
                    <Route path="/view_text" component={ViewText}/>
                </Switch>
            </App>
        </BrowserRouter>,
        document.getElementById('root')
    )
})();