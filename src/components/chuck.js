import React, { Component } from 'react';
import axios from 'axios';



class Chuck2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fact: 'Chuck Norris can text using his walkie talkie and without batteries.'
    };
    this.getFact = this.getFact.bind(this);
  }

  getFact() {
  axios.get('https://api.chucknorris.io/jokes/random')
    .then(response => {
    this.setState({fact: response.data.value});
  }).catch(error => {
    console.log(error);
  });
}

  render() {
    return(
      <div className="container text-center">
        <h1>Chuck Norris Facts</h1>
        <h3>{'"' + this.state.fact + '"'}</h3>
        <button type="button"
          onClick={this.getFact}
          className="btn btn-primary">
          More Chuck Facts!
        </button>
      </div>
    );
  }
}

export default Chuck2
