import React, { Component } from 'react';
import NotFoundContent from '../notFound/content';

export default class NotFound extends Component {
    render() {
        return(
            <div className="not_found_app">
                <main>
                    <article className="not_found_app_article">
                        <NotFoundContent/>
                    </article>
                </main>
            </div>
        )
    }
}