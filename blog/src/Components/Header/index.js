import React, { Component } from 'react'

import style from './Header.module.css'

export class Header extends Component {
    render() {
        return (
            <div className={style.headerWrapper}>
            <div className={style.Header}>
                <div>Derek Rogers</div>
                <div className={style.navbar}>
                    <div className={style.navbarItem}>Home</div>
                    <div className={style.navbarItem}>About</div>
                    <div className={style.navbarItem}>Contact</div>
                </div>
            </div>
            </div>
        )
    }
}

export default Header
