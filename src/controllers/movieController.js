import { Router } from "express";
import movieSurvice from "../services/movieSurvice.js";

const router = Router();

router.get('/create', (req, res) => {
   res.render('movies/create')
})

router.post('/create', async (req, res) => {
   const movieData = req.body;

   await movieSurvice.create(movieData)
   
   res.redirect('/')
   res.end()
})

export default router;