import React, { Component } from 'react';
import axios from 'axios';





class Chuck2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fact: 'Chuck Norris can text using his walkie talkie and without batteries.'
    };
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
      <div className="chuck-norris-container">
        <img src="http://rwrant.co.za/wp-content/uploads/2009/11/Chuck-Norris-1.jpg" alt="" />
        <div className="quote-container">
          <h3>{'"' + this.state.fact + '"'}</h3>
        </div>
        <button type="button"
          onClick={(e) => this.getFact(e)}
          className="btn btn-primary">
          More Chuck Facts!
        </button>
      </div>
    );
  }
}

export default Chuck2
