import React, { Component } from 'react';
import './App.css';
import './index.js'
import Block from './components/block';
import Testimonial from './components/testimonial';
import GitHub from './components/github';
import Chuck from './components/chuck';
import Movies from './components/movies';
import data from './components/data.json';
import Header from './components/header';




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
        <Header headerProp="Project Sample-Site"/>
        <Testimonial/>
        <Block titleProp="GitHub API" content="Pulling My Github Profile Data Using GitHubs API"/>
        <GitHub username="timblake17"/>
        <Block titleProp="Chuck Norris API" content="Pulling Chuck Norris Jokes from Chuck Norris API" />

        <Chuck />
        <Block titleProp="Movie Filter" content="Filtering Movies and Books with Genre Types Using a Json File"/>


        <Movies  />

      </div>
    );
  }
}

export default App;
