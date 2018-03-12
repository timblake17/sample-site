import React, { Component } from 'react';
import data from './data.json';


  const Movies = (props) => {



    return (
      <div>
        <ul>
          <div>
            <input type="radio" id="red" name="tabs" checked="checked" />
						<label>Movies</label>
					</div>
					<div>
						<input type="radio"/>
						<label>Books</label>
					</div>
					<div>
						<a href="#">Clear filters</a>
					</div>
            <button id= "button" type="button" onclick="books(props)">button</button>



     {



       function books(props){data.media.map(function(movie){
         alert('hi')
         if (movie.type.includes('book')) {
         return <li>{movie.year} - {movie.title}-{movie.genre}
           <img src={movie.poster} alt="" />
         </li>;
       }
       })
     }
     }

     </ul>
  </div>
    )
  }

  export default Movies;
