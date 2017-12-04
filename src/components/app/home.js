import React, { Component } from 'react';
import HomeContent from '../home/content';

export default class Home extends Component {
    render() {
        return(
            <div className="home_app">
                <main>
                    <article className="home_article">
                        <HomeContent/>
                    </article>
                </main>
            </div>
        )
    }
}