import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

import style from './Header.module.css'

const links = [
    { displayTitle: 'Home', url: '/' },
    { displayTitle: 'Blog', url: '/blog' },
    { displayTitle: 'Contact', url: '/contact' }
]

export class Header extends Component {
    getNavLinks = () => (
        links.map((e, i) => (
            <NavLink key={i} to={e.url}>
                <div className={style.navbarItem}>{e.displayTitle}</div>
            </NavLink>
        ))
    )
    render() {
        return (
            <div className={style.headerWrapper}>
                <div className={style.Header}>
                    <div><h2>Derek Rogers</h2></div>
                    <div className={style.navbar}>
                        {this.getNavLinks()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
