import { useEffect } from "react";
import { MovieService } from "../../api/MovieService";
import { useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import './index.scss'

const Home = ({searchValue}) => {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const {
      data: { results },
    } = await MovieService.getMovies();

    setMovies(results);
  }


  async function getMovieSearch(oi) {
    const {
      data: { results },
    } = await MovieService.searchMovies(oi);

    setMovies(results);    
  }

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    if(searchValue) {
      getMovieSearch(searchValue)
    }
  }, [searchValue]);


  return (
    <section className="Home">
      {movies.map((movie) => (
        <div key={movie.id} >
          <MovieCard movie={movie}/>
        </div>
      ))};
    </section>
  );
};

export default Home;
