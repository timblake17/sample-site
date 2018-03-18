import React, { Component } from 'react';

const urlForUsername= username =>
`https://api.github.com/users/${username}`

class GitHub extends Component {
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
        <img src={this.state.githubData.avatar_url} alt="" />
        <h2>{this.state.githubData.name}</h2>
        <h2>{this.state.githubData.company}</h2>
        <h2>{this.state.githubData.bio}</h2>
        <h2>{this.state.githubData.repos}</h2>
      </div>
    )
  }
}

export default GitHub;
