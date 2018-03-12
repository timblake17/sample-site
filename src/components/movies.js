import React, { Component } from 'react';
import data from './data.json';


class Movies extends React.Component  {
  constructor(){
    super();

    ///get initial state
    this.state = {
      show: 'movies'
    };
  }
  render() {
    return (
      <div>

        <input type="radio" onClick= "#" name="movies" value="" />
        <label>Movies</label>
        <input type="radio" name="books" value="" />
        <label>Books</label>

        <ul>
          {
            data.media.map(function(movie){
            if (movie.type.includes('movie')) {
            return <li>{movie.year} - {movie.title}-{movie.genre}
            <img src={movie.poster} alt="" />
            </li>;
            }
           })
          }
          {
        data.media.map(function(movie){
          if (movie.type.includes('book')) {
          return <li>{movie.year} - {movie.title}-{movie.genre}
            <img src={movie.poster} alt="" />
          </li>;
        }
        })
      }
      </ul>
    </div>
    )
  }
}

  export default Movies;
