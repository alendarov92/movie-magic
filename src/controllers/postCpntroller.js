import { Router } from "express";

const router = Router();

router.get('/create', (req, res) => {
   res.render('layouts/create')
})

router.post('/create', (req, res) => {
   
})
// router.get('/:id/details', (req, res) => {
//    res.render('layouts/details')
// })

export default router;