import React, { Component } from 'react';
import data from './data.json';
import './movies.css'



class Movies extends React.Component  {
  constructor(){
    super();

    this.state = {
      show:'',
      genre:''

  };
  }

  filterBooks() {
    this.setState({show:'books'})
  }

  filterMovies() {
    this.setState({show:'movies'})
  }

  filterAction() {
    this.setState({genre:'action'})
  }

  filterComedy() {
    this.setState({genre:'comedy'})
  }

  filterAnimation() {
    this.setState({genre:'animation'})
  }

  filterAdventure() {
    this.setState({genre:'adventure'})

  }

  clearFilters() {
    this.setState({show:''})
    this.setState({genre:''})
  }





  render() {
    return (
      <div>
        <div>
          <input type="Checkbox" name="book" value="" onChange={(e) => this.filterBooks(e)} />
          <label>Books</label>
          <input type="Checkbox" name="movies" value="" onClick={(e) => this.filterMovies(e)}/>
          <label>Movies</label>
        </div>
        <div>
          <input type="Checkbox" name="movies" value="" onClick={(e) => this.clearFilters(e)}/>
          <label>Clear Filters</label>
        </div>
        <div>
          <input type="Checkbox" name="Action" value="" onClick={(e) => this.filterAction(e)} />
          <label>Action</label>
           <input type="Checkbox" name="Comedy" value="" onClick={(e) => this.filterComedy(e)}/>
          <label>Comedy</label>
           <input type="Checkbox" name="Animation" value="" onClick={(e) => this.filterAnimation(e)} />
          <label>Animation</label>
          <input type="Checkbox" name="Adventure" value="" onClick={(e) => this.filterMovies(e)}/>
          <label>Adventure</label>
        </div>



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
          {
            data.media.map(movie=>{
            if (movie.genre.includes('action') && this.state.genre ==='action') {
            return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" />
              </li>
            }
          })
          }
          {
            data.media.map(movie=>{
            if (movie.genre.includes('comedy') && this.state.genre ==='comedy') {
            return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" />
              </li>
            }
          })
          }
          {
            data.media.map(movie=>{
            if (movie.genre.includes('animation') && this.state.genre ==='animation') {
            return <li key={movie.title}>{movie.title}-{movie.year}
              <img src={movie.poster} alt="" />
              </li>
            }
          })
          }
          {
            data.media.map(movie=>{
            if (movie.genre.includes('adventure') && this.state.genre ==='adventure') {
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
