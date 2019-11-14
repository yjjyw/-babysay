import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import MapRouter from '../../router/MapRouter'
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='home'>
                <div className='head'>
                    <MapRouter route={this.props.route}/>
                </div>
                <div className="foot">
                    <li>
                        <NavLink to='/babylook'>
                            <p><i className='iconfont icon-dianshiji'></i></p>
                            <p>宝宝看</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/listenbaby'>
                            <p><i className='iconfont icon-yinle'></i></p>
                            <p>宝宝听</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/my'>
                            <p><i className='iconfont icon-wode'></i></p>
                            <p>我的</p>
                        </NavLink>
                    </li>
                </div>
            </div>
        );
    }
}

export default index;