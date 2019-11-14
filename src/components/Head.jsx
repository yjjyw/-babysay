import React, { Component } from 'react';
class Head extends Component {
    render() {
        return (
            <header>
                <div className='header_box'>
                    {this.props.isBack && <span>＜{this.props.name}</span>}
                </div>
                <span>{this.props.title}</span>
                <span></span>
                
            </header>
        );
    }
}
Head.defaultProps={
    title:"宝宝看",
    isBack:false,
    name:"宝宝看"
}
export default Head;