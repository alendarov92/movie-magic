import { Router } from "express";
import movieSurvice from "../services/movieSurvice.js";

const router = Router();

// ======> CREATING A NEW MOVIE
      //GET THE TEMPLATE
router.get('/create', (req, res) => {
   res.render('movies/create')
})
      //MAKING THE LOGIC
router.post('/create', async (req, res) => {
   const movieData = req.body;

   await movieSurvice.create(movieData)
   
   res.redirect('/')
})

// ======> Render Search
router.get('/search', async (req, res) => {
   const filter = req.query;
   const movies = await movieSurvice.getAll(filter);

   res.render('home', { isSearch: true, movies, filter });
});

// =======> Details

router.get('/:movieId/details', async (req, res) => {
   const movieId = req.params.movieId;
   const movie = await movieSurvice.getOne(movieId);

   movie.ratingView = getRatingViewData(movie.rating);

   res.render('movies/details', {movie})
})

// =======> RATING
function getRatingViewData(rating) {
   if (!Number.isInteger(rating)) {
      return 'n\\a';
   }
   return '&#x2605;'.repeat(rating);
}

export default router;