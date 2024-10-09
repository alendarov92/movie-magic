import { Router } from "express";
import authService from '../services/authService.js'

const router = Router();


// ==== REGISTER
router.get('/register', (req, res) => {
    res.render('auth/register')
})

router.post('/register', async (req, res) => {
    const userData = req.body;

    await authService.register(userData);

    res.redirect('/')

});


// === LOGIN
router.get('/login', (req, res) => {
    res.render('auth/login')
})

router.post('login', async (req, res) => {
   const {email, password} = req.body;

   const tokem = await authService.login({email, password});

   // TODO: Add token to cookie

   res.redirect('/')

})



export default router