class Movie {
  constructor(movie){
    this.id = movie.id;
    this.title = movie.title;
    this.releaseDate = movie.release_date;
    this.posterPath = movie.poster_path;
  }
}

module.exports = {
  Movie
}