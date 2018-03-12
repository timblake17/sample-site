import React, { Component } from 'react';
import data from './data.json';


  const Movies = (props) => {



    return (
      <div>
        <ul>
          <div>
            <input type="radio" checked="checked" />
						<label>Movies</label>
					</div>
					<div>
						<input type="radio"/>
						<label>Books</label>
					</div>
					<div>
						<a href="#">Clear filters</a>
					</div>
          <h2>Movies</h2>
          {
             data.media.map(function(movie){
               if (movie.type.includes('movie')) {
               return <li>{movie.year} - {movie.title}-{movie.genre}
                 <img src={movie.poster} alt="" />
               </li>;
               }
           })
          }
          <h2>Books</h2>
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

  export default Movies;
