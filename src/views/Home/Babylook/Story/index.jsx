import React, { Component } from 'react';
// import StoryItem from '../../../../components/StoryItem';
import axios from 'axios';
class Story extends Component {
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
                            <div className="er_item" key={index} onClick={()=>{
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
                                    <span className="iconfont icon-angle-right"></span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
    componentDidMount(){
        axios.get('http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30&collectid=27').then((res)=>{
            // console.log(res.data.list)
            let list=res.data.list.slice(1)
            this.setState({
                list:list
            })
        })
    }
}

export default Story;