import { Router } from "express";
import authService from '../services/authService.js'

const router = Router();


// ==== REGISTER
router.get('/register', (req, res) => {
    res.render('auth/register')
})

router.post('/register', async (req, res) => {
    const userData = req.body;

    await authService.createUser(userData);

    res.redirect('/')

});


// === LOGIN
router.get('/login', (req, res) => {
    res.render('auth/login')
})



export default router