import { Router } from "express";
import movieSurvice from "../services/movieSurvice.js";
import castSurvice from "../services/castService.js";


const router = Router();

function toArray(documents) {
   return documents.map(document => document.toObject())
}

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

   res.render('home', { isSearch: true, movies: toArray(movies), filter });
});

// =======> Details

router.get('/:movieId/details', async (req, res) => {
   const movieId = req.params.movieId;
   const movie = await movieSurvice.getOne(movieId).lean();
   
   movie.ratingView = getRatingViewData(movie.rating);

   res.render('movies/details', { movie })
})

// =======> RATING
function getRatingViewData(rating) {
   if (!Number.isInteger(rating)) {
      return 'n\\a';
   }
   return '&#x2605;'.repeat(rating);
}

// =======> Cast

router.get('/:movieId/attach', async (req, res) => {
   const movie = await movieSurvice.getOne(req.params.movieId).lean();
   const casts = await castSurvice.getAll().lean();

   res.render('movies/attach', {movie, casts})

})

router.post('/:movieId/attach', async (req, res) => {
   const movieId = req.params.movieId;
   const castId = req.body.cast;

  await movieSurvice.attach(movieId, castId)

    res.redirect(`/movies/${movieId}/details`)

})

export default router;  