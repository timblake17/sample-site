import React, { Component } from 'react';
import data from './data.json';
import './movies.css'



class Movies extends React.Component  {
  constructor(){
    super();

    this.state = {
      show:[],
      genre:[]

  };
  }

addType(e, title){
  if(e.target.checked){
  this.setState({
    show: [...this.state.show, title]})
  }else{
    var index = this.state.show.indexOf(title);
    if (index > -1) {
    this.state.show.splice(index, 1);
    this.setState({
      show: [...this.state.show,]})
    }

  }
}

addGenre(e, title){
  if(e.target.checked){
  this.setState({
    show: [...this.state.genre, title]})
  }else{
    var index = this.state.genre.indexOf(title);
    if (index > -1) {
    this.state.genre.splice(index, 1);
    this.setState({
      show: [...this.state.genre,]})
    }

  }
}


clearFilters() {
  this.setState({show:''})
  this.setState({genre:''})
}

  render() {
    return (
      <div>
        <div>
          <label><input id="books" type="Checkbox" name="book" value="" onClick={(e) => this.addType(e,'books')} />
          Books</label>
          <label><input id="checkboxId" type="Checkbox" name="movies" value="" onClick={(e) => this.addType(e,'movies')}/>
          Movies</label>


        </div>
        <button onClick={(e) => this.clearFilters(e)} type="button">Clear Filters</button>
        <div>
          <input type="Checkbox" name="Action" value="" onClick={(e) => this.addGenre(e,'action')} />
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
            if (movie.type.includes('book') && this.state.show.includes ('books')) {
            return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" /></li>
            }else if (movie.type.includes('movie') && this.state.show.includes ('movies')) {
              return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" /></li>
            }else if (movie.genre.includes('action') && this.state.genre.includes ('action')) {
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
