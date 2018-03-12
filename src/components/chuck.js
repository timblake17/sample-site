import React, { Component } from 'react';
const joke = +1;

let urlForUsername= username =>
"http://api.icndb.com/jokes/random"
//
// getElementById('next').on(click, function(
//   joke= joke+=1
// ))

class Chuck extends Component {
  constructor(props){
    super(props)
    this.state = {
      requestFailed: false
    }
  }
  componentDidMount(){
    fetch(urlForUsername(this.props.username))
      .then(response=> {
        if(!response.ok){
          throw Error("Network Request Failed")
        }
        return response
      })
      .then(d => d.json())
      .then(d =>{
        this.setState({
          githubData: d
        })
      }, () => {
        this.setState({
          requestFailed:true
        })
      })
  }




  render(){
    if(this.state.requestFailed) return <p>Failed</p>

    if(!this.state.githubData) return <p>Loading...</p>
    return(
      <div>

        <button type="button" id="next" >Next Joke</button>
        <h2>{this.state.githubData.value.joke}</h2>
      </div>
    )
  }
}

export default Chuck;
