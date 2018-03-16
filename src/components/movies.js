import React, { Component } from 'react';
import data from './data.json';
import './movies.css'



class Movies extends React.Component  {
  constructor(){
    super();

    this.state = {
      show:'',
      genre:'',

  };
  }

  clearFilters() {
    this.setState({show:''})
    this.setState({genre:''})
  }

  handleCheckboxBooks(e){
    if (e.target.checked){
      this.setState({show:'books'});}
      else{
        this.clearFilters(e)
      }
    }

  handleCheckboxMovies(e){
    if (e.target.checked){
      this.setState({show:'movies'});}
      else{
        this.clearFilters(e)
      }
    }

  handleCheckboxAction(e){
    if (e.target.checked){
      this.setState({genre:'action'});}
      else{
        this.clearFilters(e)
      }
    }

  handleCheckboxComedy(e){
    if (e.target.checked){
      this.setState({genre:'comedy'});}
      else{
        this.clearFilters(e)
      }
    }

  handleCheckboxAnimation(e){
    if (e.target.checked){
      this.setState({genre:'animation'});}
      else{
        this.clearFilters(e)
      }
    }

  handleCheckboxAdventure(e){
    if (e.target.checked){
      this.setState({genre:'adventure'});}
      else{
        this.clearFilters(e)
      }
    }

  render() {
    return (
      <div>
        <div>
          <label><input id="checkboxId" type="Checkbox" name="book" value="" onChange={(e) => this.handleCheckboxBooks(e)} />
          Books</label>
          <label><input id="checkboxId" type="Checkbox" name="movies" value="" onClick={(e) => this.handleCheckboxMovies(e)}/>
          Movies</label>
        </div>
        <button onClick={(e) => this.clearFilters(e)} type="button">Clear Filters</button>
        <div>
          <input type="Checkbox" name="Action" value="" onClick={(e) => this.handleCheckboxAction(e)} />
          <label>Action</label>
           <input type="Checkbox" name="Comedy" value="" onClick={(e) => this.handleCheckboxComedy(e)}/>
          <label>Comedy</label>
          <input type="Checkbox" name="Animation" value="" onClick={(e) => this.handleCheckboxAnimation(e)} />
          <label>Animation</label>
          <input type="Checkbox" name="Adventure" value="" onClick={(e) => this.handleCheckboxAdventure(e)}/>
          <label>Adventure</label>
        </div>
          <ul>
          {
            data.media.map(movie=>{
            if (movie.type.includes('book') && this.state.show ==='books') {
            return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" /></li>
            }else if (movie.type.includes('movie') && this.state.show ==='movies') {
              return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" /></li>
            }else if (movie.genre.includes('action') && this.state.genre ==='action') {
              return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" /></li>
            }else if (movie.genre.includes('comedy') && this.state.genre ==='comedy') {
              return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" /></li>
            }else if (movie.genre.includes('animation') && this.state.genre ==='animation') {
              return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" /></li>
            }else if(movie.genre.includes('adventure') && this.state.genre ==='adventure') {
              return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" /></li>
            }
           })
          }
      </ul>
    </div>
    )
  }
}

export default Movies;
