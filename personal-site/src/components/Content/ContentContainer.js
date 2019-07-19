import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setActiveView } from '../../actions'
import Content from './'

export default class ContentContainer extends Component {
    
    componentDidMount(){

    }

    

    render() {
        return (
            <Content activeView={this.props.activeView} />
        )
    }
}
