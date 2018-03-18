import React, { Component } from 'react';
import App from '../App.js';


class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
         </div>
      );
   }
}

export default Header;
