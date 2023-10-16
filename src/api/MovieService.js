import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "b38ba98bfae80c9c7a8be19bebbef23d";

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

// não vai construir objetos, só para armazenar metodos endpoints onde vai ser a comunicação entre api e a pagina.
export class MovieService {

    static getMovies() {
        return axios(withBaseUrl("movie/popular"));
    }

    static getMoviesDetails(id) {
        return axios(withBaseUrl(`movie/${id}`));
    }

    static searchMovies(movie) {
        return axios (withBaseUrl("search/movie") + `&query=${movie}`);
    }

}


