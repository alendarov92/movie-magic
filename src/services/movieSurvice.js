import movieData from '../data/movieData.js'
import uniqid from 'uniqid'


const getAll = () => movieData.getMovies();


const create = (movie) => {
    movie.id = uniqid();
    movie.rating = Number(movie.rating)
    return movieData.create(movie);
};


const getOne = async (movieId) => {

    const movies = await movieData.getMovies();

    const resultMovie = movies.find(movie => movie.id == movieId);

    return resultMovie
}

export default {
    getAll,
    create,
    getOne
}

