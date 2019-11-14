import React, { Component } from 'react';

class Cartoondetails extends Component {

    constructor(props) {

        super(props);

        this.state = {  };

    }

    render() {

        return (

            <div>

                Cartoondetails
                {this.props.location.state.url?<video src={this.props.location.state.url} autoPlay controls></video>:<h4>视频失效了</h4>}

            </div>

        );

    }

}




export default Cartoondetails;