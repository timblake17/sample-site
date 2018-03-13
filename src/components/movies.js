import React, { Component } from 'react';
import data from './data.json';



class Movies extends React.Component  {
  constructor(){
    super();

    this.state = {show:'movies'};

    this.filterBooks = this.filterBooks.bind(this);
  }

  filterBooks() {
    this.setState({show:'books'})
    console.log('books')
  }

  filterMovies() {
    this.setState({show:'movies'})
    console.log('hi')
  }

  render() {
    return (
      <div>
        <input type="Checkbox" name="book" value="" onClick={(e) => this.filterBooks(e)} />
        <label>Book</label>
        <input type="Checkbox" name="movies" value="" onClick={(e) => this.filterMovies(e)}/>
        <label>Movie</label>

        <ul>
          {
            data.media.map(movie=>{
            if (movie.type.includes('book') && this.state.show ==='books') {
            return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" />
              </li>
            }
           })
          }
          {
            data.media.map(movie=>{
            if (movie.type.includes('movie') && this.state.show ==='movies') {
            return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" />
              </li>
            }
          })
          }
      </ul>
    </div>
    )
  }
}

export default Movies;
