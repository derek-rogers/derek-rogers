import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Bio from '../Bio';
import BlogContainer from '../Blog/BlogContainer';

import style from './Content.module.css'


export default class Content extends Component {

    render() {
        return (
            <div className={style.Content}>
                <Route exact path="/" component={Bio} />
                <Route exact path='/blog/all' component={Bio} />
                <Route exact path="/blog/:id?" component={BlogContainer} />
            </div>
        )
    }
}
