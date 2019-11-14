import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import MapRouter from '../../../router/MapRouter';
import '../../../css/Babylook.css'
import Head from '../../../components/Head.jsx'
class Babylook extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='babylook'>
                <div className="babylook_head">
                    <Head/>
                    <div className="babylook_nav">
                        <NavLink to='/babylook/songs'>儿歌</NavLink>
                        <NavLink to='/babylook/story'>故事</NavLink>
                        <NavLink to='/babylook/cartoon'>动画片</NavLink>
                    </div>
                </div>
               
               <div className="babylook_main">
                    <MapRouter route={this.props.route}/>
               </div>
            </div>
        );
    }
}

export default Babylook;