import { Router } from "express";

const router = Router();

router.get('/create', (req, res) => {
   res.render('movies/create')
})

router.post('/create', (req, res) => {
   
})

export default router;