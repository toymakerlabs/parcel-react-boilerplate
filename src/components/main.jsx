import React, { Component } from 'react';
//import io from 'socket.io-client';

import "../styles/main.scss";

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
          current_page:0,
      }
    }
    componentDidMount() {
     }
    handleNavChange(item){
    }
    render(){

        return(
            <div>
                <h1>{this.props.title}</h1>

            </div>
        )
    }

}

export default Main
