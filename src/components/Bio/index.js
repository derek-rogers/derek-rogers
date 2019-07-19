import React, { Component } from 'react'

import Separator from '../../ui/Separator'

import style from './Bio.module.css'

export default class Bio extends Component {
    render() {
        return (
            <div className={style.Bio}>
                <div className={style.headshot}>
                    <img src='./headshot.jpg' alt='Derek Rogers' />
                </div>
                <h1>Hi, I'm Derek.</h1>
                <div className={style.socialIconsContainer}>
                    <a href='https://github.com/derek-rogers' target='_blank' rel='noopener noreferrer'><img src='./github-brands.svg' alt='Github Link' /></a>
                    <a href='https://www.linkedin.com/in/derekjrogers/' target='_blank' rel='noopener noreferrer'><img src='./linkedin-brands.svg' alt='LinkedIn Link' /></a>
                    <a href='https://twitter.com/derek_j_rogers' target='_blank' rel='noopener noreferrer'><img src='./twitter-brands.svg' alt='Twitter Link' /></a>
                </div>
                <Separator />
                <h3>
                    I believe anyone, at any level, can improve a process if they are
                    willing to critically investigate potential problems and design creative solutions.
                </h3>
            </div>
        )
    }
}
