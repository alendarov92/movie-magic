import { Router } from "express";
import movieSurvice from "../services/movieSurvice.js";
import castSurvice from "../services/castService.js";
import { isAuth } from "../middlewares/authMiddleware.js";


const router = Router();

function toArray(documents) {
    return documents.map(document => document.toObject())
}

// ======> CREATING A NEW MOVIE
//GET THE TEMPLATE
router.get('/create', isAuth, (req, res) => {
    res.render('movies/create')
})
//MAKING THE LOGIC
router.post('/create',isAuth, async (req, res) => {
    const movieData = req.body;
    const ownerId = req.user?._id;

    await movieSurvice.create(movieData, ownerId)

    res.redirect('/')
})

// ======> Render Search
router.get('/search', async (req, res) => {
    const filter = req.query;
    const movies = await movieSurvice.getAll(filter).lean();

    res.render('home', { isSearch: true, movies, filter });
});

// =======> Details

router.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieSurvice.getOne(movieId).lean();

    const isOwner = req.user?._id == movie.owner

    res.render('movies/details', { movie, isOwner })
})

// =======> Cast attach

router.get('/:movieId/attach',isAuth, async (req, res) => {
    const movie = await movieSurvice.getOne(req.params.movieId).lean();
    const casts = await castSurvice.getAllWithout(movie.casts).lean();

    res.render('movies/attach', { movie, casts })

})

router.post('/:movieId/attach',isAuth, async (req, res) => {
    const movieId = req.params.movieId;
    const castId = req.body.cast;

    await movieSurvice.attach(movieId, castId)

    res.redirect(`/movies/${movieId}/details`)

})

// ======> Delete
router.get('/:movieId/delete',isAuth, async (req, res) => {
    const movieId = req.params.movieId;
    await movieSurvice.remove(movieId);

    res.redirect('/')

})
 
// ======> EDIT

router.get('/:movieId/edit',isAuth, async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieSurvice.getOne(movieId).lean();

   res.render('movies/edit', {movie})
})

router.post('/:movieId/edit',isAuth,async (req, res) => {
     const movieData = req.body;
     const movieId = req.params.movieId;

     await movieSurvice.edit(movieId, movieData);

     res.redirect(`/movies/${movieId}/details`)
})


export default router;  