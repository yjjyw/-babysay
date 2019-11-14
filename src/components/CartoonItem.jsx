import React, { Component } from 'react';
import '../css/CartoonItem.css'
export class CartoonItem extends Component {
    render() {
        let {name,score,tracks,pic,ind}=this.props;
        return (
            <div className="dong_item">
                    <div>
                        <img src={pic} alt=""/>
                        <span>{score}分</span>
                    </div>
                    <div>
                        <p>{ind}.{name}</p>
                        <p>共{tracks}集</p>
                    </div>
            </div>
        );
    }
}

export default CartoonItem;
