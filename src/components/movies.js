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
    genre: [...this.state.genre, title]})
  }else{
    var index = this.state.genre.indexOf(title);
    if (index > -1) {
    this.state.genre.splice(index, 1);
    this.setState({
      genre: [...this.state.genre,]})
    }

  }
}


clearFilters() {
  this.setState({show:''})
  this.setState({genre:''})
  var x = document.getElementsByClassName("checkboxId");
  for (var i = 0; i < x.length; i++) {
      x[i].checked = false;;
  }}

  render() {
    return (
      <div className="movies-books-container">
        <div  >
          <label><input ref="check" className="checkboxId" type="Checkbox" name="book" value="" onClick={(e) => this.addType(e,'books')} />
          Books</label>
          <label><input className="checkboxId" type="Checkbox" name="movies" value="" onClick={(e) => this.addType(e,'movies')}/>
          Movies</label>
        </div>
        <div>
          <input className="checkboxId" type="Checkbox" name="Action" value="" onClick={(e) => this.addGenre(e,'action')} />
          <label>Action</label>
           <input className="checkboxId" type="Checkbox" name="Comedy" value="" onClick={(e) => this.addGenre(e,'comedy')}/>
          <label>Comedy</label>
          <input className="checkboxId"  type="Checkbox" name="Animation" value="" onClick={(e) => this.addGenre(e,'animation')} />
          <label>Animation</label>
          <input className="checkboxId"  type="Checkbox" name="Adventure" value="" onClick={(e) => this.addGenre(e,'adventure')}/>
          <label>Adventure</label>
        </div>
        <button onClick={(e) => this.clearFilters(e)} type="button">Clear Filters</button>

          <ul>
          {
            data.media.map(movie=>{
            if (movie.type.includes('book') && this.state.show.includes ('books')) {
            return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" />Book</li>
            }else if (movie.type.includes('movie') && this.state.show.includes ('movies')) {
              return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" />Movie</li>
            }else if (movie.genre.includes('action') && this.state.genre.includes ('action')) {
              return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" />Action</li>
            }else if (movie.genre.includes('comedy') && this.state.genre.includes('comedy')) {
              return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" />Comedy</li>
            }else if (movie.genre.includes('animation') && this.state.genre.includes('animation')) {
              return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" />Animation</li>
            }else if(movie.genre.includes('adventure') && this.state.genre.includes('adventure')) {
              return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" />Adventure</li>
            }
           })
          }
      </ul>
    </div>
    )
  }
}

export default Movies;
