import React, { Component } from 'react';
import axios from 'axios'
class Listensongs extends Component {
    state={
        list:[]
    }
    componentDidMount(){
        axios.get('http://bb.shoujiduoduo.com/baby/bb.php?type=getlist&pagesize=30&listid=5').then(res=>{
            this.setState({
                list:res.data.list
            })
        })
    }
    constructor(props) {
        super(props);
        this.state = {  };
        
    }
    render() {
        let {list} = this.state
        return (
            <div className='song'>
               <ul className='song_ul'>
                    {
                        list&&list.map((item,index)=>{
                            return (
                              <ol className="ul_li" key={index} onClick={this.ting.bind(this,item)}>
                              <h3>{index}</h3>
                              <div className='nei'>
                              <span>{item.name}</span>
                              <div className='rong'>
                              <span>{item.artist}</span>
                              <span className='bo'>播放{item.filesize}</span>
                              </div>
                              </div>
                              </ol>
                            )
                        })
                    }
               </ul>
            </div>
        );
    }
    ting(item){
        this.props.history.push({pathname:'/listenbabydetails',state:item});
    }
}

export default Listensongs;