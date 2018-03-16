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
