import React from 'react';

import style from './Accordion.module.css';

const AccordionItemContext = React.createContext();

class Accordion extends React.Component {
    render(){
        return(
            <div className={style.AccordionWrapper}>
                {this.props.children}
            </div>
        );
    }
}

class Item extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            expanded: false
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }))
    };

    render(){
        const visibility = this.state.expanded ? style.expand : style.collapse;

        // Attach toggle to children, so that Title can call the toggle method
        const children = React.Children.map(this.props.children, child => (
            React.cloneElement(child, {toggle: this.toggle, expanded: this.state.expanded})
        ));

        return(
            <AccordionItemContext.Provider {...this.props}>
                <div className={[style.AccordionItem, visibility].join(" ")}>
                    {children}
                </div>
            </AccordionItemContext.Provider>
        )
    }
}

class Title extends React.Component {
    handleClick = () => {
        this.props.toggle();

        if(this.props.expanded){
            if(this.props.onCollapse){
                this.props.onCollapse();
            }
        } else {
            if(this.props.onExpand){
                this.props.onExpand();
            }
        }
    };

    render(){
        const toggleIndicator = this.props.expanded ? '' : style.closed;

        return(<div className={style.AccordionTitle} onClick={this.handleClick}>
            {this.props.children || null}
            <div><img className={[style.toggleIndicator, toggleIndicator].join(" ")} src={'./images/angle-arrow-down.png'} alt='Arrow Icon'/></div>
        </div>);
    }
}

class Content extends React.Component {
    render(){
        return(<div className={style.AccordionContent} >{this.props.children}</div>)
    }
}

Accordion.Item = Item;
Accordion.Title = Title;
Accordion.Content = Content;

export default Accordion;