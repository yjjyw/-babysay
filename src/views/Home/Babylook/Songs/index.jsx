import React, { Component } from 'react';
// import SongsItem  from '../../../../components/SongsItem.jsx'
import axios from 'axios';
import "../../../../css/SongsItem.css"
class Songs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         };
    }
    render() {
        let {list}=this.state;
        return (
            <div>
                {
                    list&&list.map((item,index)=>{
                        return (
                            <div className="er_item" key={index} onClick={(e)=>{
                                // console.log(e)
                                // e.preventDefault();
                                // e.stopPropagation();
                                // console.log(this)
                                // // this.props.jumpDetail(downurl,this.props.match.path)
                                // // .props.match
                                this.props.history.push('/songsitemdetail',item)
                            }}>
                                <div>
                                <img src={item.pic} alt=""/>
                                </div>
                                <div>
                                    <p>{index+1}.{item.name}</p>
                                    <p>{item.artist}   播放：{item.playcnt}</p>
                                </div>
                                <div>
                                    <span className="iconfont icon-xiazai"></span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
    componentDidMount(){
        axios.get("http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30&collectid=29").then((res)=>{
            // console.log(res.data.list)
            let list=res.data.list.slice(1)
            // console.log(list)
            this.setState({
                list:list
            })
        })
    }
    // tolookdetail(){
        
    // }
}

export default Songs;