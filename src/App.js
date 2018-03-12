import React, { Component } from 'react';
import './App.css';
import './index.js'
import Block from './components/block';
import Testimonial from './components/testimonial';
import GitHub from './components/github';
import Chuck from './components/chuck';
import Movies from './components/movies';
import data from './components/data.json';



class App extends Component {
  constructor(){
    super();

    ///get initial state
    this.state = {
    };
  }


  render() {
    return (
      <div className="App">
        <Block />
        <Testimonial/>

        <Block />
        <GitHub username="timblake17"/>
        <Block />

        <Chuck />
        <Block />

        
        <Movies />
      </div>
    );
  }
}

export default App;
