import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import MapRouter from '../../../router/MapRouter';
import Head from '../../../components/Head'
class Listenbaby extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="listenbaby">
                <Head title='宝宝听'></Head>
                <div className='qie'>
                    <NavLink to='/listenbaby/listensongs'>儿歌</NavLink>
                    <NavLink to='/listenbaby/listenstory'>故事</NavLink>
               </div>
               <div className='sec'>
                    <MapRouter route={this.props.route}/>
               </div>
            </div>
        );
    }
}

export default Listenbaby;