import React, { Component } from 'react';
// import CartoonItem from '../../../../components/CartoonItem';
import axios from 'axios';
import '../../../../css/cartoon_list.css'
import '../../../../css/CartoonItem.css'
class Cartoon extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         };
    }
    render() {
        let {list}=this.state;
        return (
            <div className="cartoon_list">
                 {
                    list&&list.map((item,index)=>{
                        return (
                            <div className="dong_item" key={index} onClick={()=>{
                                this.props.history.push('/songsitemdetail',item)
                            }}>
                                <div>
                                    <img src={item.pic} alt=""/>
                                    <span>{item.score}分</span>
                                </div>
                                <div>
                                    <p>{index+1}.{item.name}</p>
                                    <p>共{item.tracks}集</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
    componentDidMount(){
        axios.get("http://bb.shoujiduoduo.com/baby/bb.php?type=getlistv2&act=home&pagesize=30&pid=26").then((res)=>{
            // console.log(res.data.list)
            let list=res.data.list.slice(1)
            this.setState({
                list:list
            })
        })
    }
}

export default Cartoon;