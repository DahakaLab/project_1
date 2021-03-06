import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./home";
import Notebooks from "./notebooks";
import ViewText from "./viewText";
import NotFound from "./notFound";

export default class Main extends Component {
    render() {
        return(
            <div className="main">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/notebooks" component={Notebooks}/>
                    <Route path="/view_text" component={ViewText}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </div>
        )
    }
}