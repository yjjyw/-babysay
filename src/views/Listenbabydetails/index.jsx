import React, { Component } from 'react';
class Listenbabydetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {downurl}=this.props.location.state;

        return (
            <div>
                Listenbabydetails
                {
                    downurl?<audio src={downurl} autoPlay controls></audio>:<h1>音频失效了</h1>
                }
                
            </div>
        );
    }
}

export default Listenbabydetails;