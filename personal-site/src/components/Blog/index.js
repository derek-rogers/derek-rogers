import React, { Component } from 'react'
import showdown from 'showdown'

import { NavLink } from 'react-router-dom'

import Separator from '../../ui/Separator'

import style from './Blog.module.css'

export default class Blog extends Component {

    getLatestPost = () => {
        if (!this.props.blogPost || this.props.blogPost.error) {
            return <React.Fragment></React.Fragment>
        }

        let latestPost = this.props.blogPost.data
        let converter = new showdown.Converter()
        let body = converter.makeHtml(latestPost.body)
        let date = new Date(latestPost.datePosted)
        return (
            <div className={style.blogPost}>
                <h1>{latestPost.title}</h1>
                <h5>{date.toLocaleDateString()}</h5>
                <div className={style.blogBody} dangerouslySetInnerHTML={{ __html: body }}></div>
            </div>
        )
    }

    render() {

        return (<div className={style.Blog}>
            <div className={style.blogHeader}>
                <h1>Blog</h1>
                <div className={style.blogNavigation}>
                    <NavLink to={`/blog/${this.props.blogPost ? this.props.blogPost.data.id - 1 : ''}`}><img src='/arrow-left-solid.svg' alt='Left Arrow' /></NavLink>
                    <NavLink to={`/blog/${this.props.blogPost ? this.props.blogPost.data.id + 1 : ''}`}><img src='/arrow-right-solid.svg' alt='Right Arrow' /></NavLink>
                </div>
                <Separator />
            </div>
            {!this.props.blogPost.isLoading && this.getLatestPost()}
        </div>)

    }
}
