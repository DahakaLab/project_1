import React, { Component } from 'react';
import Content from '../home/content';

export default class Home extends Component {
    render() {
        return(
            <div className="home_app">
                <main>
                    <article className="home_article">
                        <Content/>
                    </article>
                </main>
            </div>
        )
    }
}