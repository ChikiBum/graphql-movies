import {useState, useCallback} from 'react';
import { Movie } from '../../components/MovieCardSelected'
import { MAX_SELECTED_MOVIES } from '../../config';

export const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([])

  const selectMovie = useCallback((movie: Movie) => {
    const newFilm = !selectedMovies.find(({id}) => id === movie.id);
    const length = selectedMovies.length;
    if (newFilm && length < MAX_SELECTED_MOVIES){
    setSelectedMovies([movie, ...selectedMovies])
  }
  }, [selectedMovies]);


  const deleteMovie = useCallback((movie: Movie) => {
    setSelectedMovies(selectedMovies.filter(m => m.id !== movie.id))
  
}, [selectedMovies]);

  return{
    selectedMovies,
    selectMovie,
    deleteMovie
  }
}