import React, { Component } from 'react';
import Content from '../viewText/content';
import WhoBeatifull from "../viewText/whoBeatifull";

export default class ViewText extends Component {
    render() {
        return(
            <div className="view_text_app">
                <main>
                    <article className="viewText_article">
                        <Content/>
                        <WhoBeatifull/>
                    </article>
                </main>
            </div>
        )
    }
}