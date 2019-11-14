import React, { Component } from 'react';
import Head from '../../../components/Head'
class My extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        };
    }
    render() {
        return (
            <div className='my_home'>
                <Head title='我的'/>
                <main className='main_my'>
                    <ul className="main_top">
                      <li>
                            <span className="lefts">我的下载</span>  
                            <span className='spans'>&gt;</span>
                     </li>  
                     <li>
                            <span className="lefts">我的收藏</span>  
                            <span className='spans'>&gt;</span>
                     </li>  
                    </ul>

                     <ul className="main_center">
                      <li>
                            <span className="lefts_center">我的下载</span>  
                           
                     </li>  
                     <li>
                            <span className="lefts_center">我的收藏</span>  
                            
                     </li>  
                    </ul>

                    <div className='main_bottom'>
                       <button className='btn'>退出应用</button>
                    </div>
               </main>
            </div>
        );
    }
}

export default My;