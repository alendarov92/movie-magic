import Movie from '../models/Movie.js';


const getAll = async (filter = {}) => {
    let moviesQuery = await Movie.find();

    if (filter.search) {
        moviesQuery = moviesQuery.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()))
    }

    if (filter.genre) {
        moviesQuery = moviesQuery.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
    }

    if (filter.year) {
        moviesQuery = moviesQuery.filter(movie => movie.year === filter.year);
    }

    return moviesQuery;
};


const create = (movie) => Movie.create(movie);


const getOne = (movieId) => Movie.findById(movieId);

export default {
    getAll,
    create,
    getOne
}

