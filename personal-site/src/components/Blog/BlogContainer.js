import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, fetchLatestPost } from '../../actions'
import Blog from './'

class BlogContainer extends Component {

    componentDidMount() {
        if (this.props.match.params && this.props.match.params.id) {
            this.props.fetchPost(this.props.match.params.id)
        } else {
            this.props.fetchLatestPost()
        }
    }

    componentDidUpdate(){
        if(this.props.blogPost.error){  
            if(!this.props.blogPost.isFetching){
                this.props.fetchLatestPost()
            }
            return
        }

        if(this.props.match.params && this.props.match.params.id){
            
            if(this.props.blogPost.isFetching){
                return;
            }

            if(parseInt(this.props.match.params.id) !== this.props.blogPost.data.id){
                this.props.fetchPost(this.props.match.params.id)
            }
        }
    }

    render() {
        return (
            <Blog blogPost={this.props.blogPost} />
        )
    }
}

function mapStateToProps(state) {
    return {
        blogPost: state.blogPost
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPost: (id) => {
            dispatch(fetchPost(id))
        },
        fetchLatestPost: () => {
            dispatch(fetchLatestPost())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer)