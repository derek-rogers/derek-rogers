import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Bio from '../Bio';

import style from './Content.module.css'


export default class Content extends Component {
    
    changeContent = (page) => {
        
    }

    render() {
        return (
            <div className={style.Content}>
                <Route exact path="/" component={Bio} />
            </div>
        )
    }
}
