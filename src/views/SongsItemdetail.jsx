import React, { Component } from 'react';
import '../css/SongsItemdetail.css'
export class SongsItemdetail extends Component {
    render() {
        let {downurl}=this.props.location.state;
        console.log(downurl)
        return (
            <div className="songsitemdetail">
                {
                    downurl?<video src={downurl} autoPlay controls></video>:<h1>视频失效啦</h1>
                }
            </div>
        );
    }
}

export default SongsItemdetail;
