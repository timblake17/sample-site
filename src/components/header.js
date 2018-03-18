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
           <header>
             <h1>{this.props.headerProp}</h1>
            </header>
         </div>
      );
   }
}

export default Header;
