import { Router } from "express";
import authService from '../services/authService.js'

const router = Router();


// ==== REGISTER
router.get('/register', (req, res) => {
    res.render('auth/register')
})

router.post('/register', async (req, res) => {
    const { email, password, repeatPassword } = req.body;

    await authService.register(email, password);

    res.redirect('/')

});


// === LOGIN
router.get('/login', (req, res) => {
    res.render('auth/login')
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const token = await authService.login(email, password);

    // TODO: Add token to cookie
    res.cookie('auth', token, { httpOnly: true })

    res.redirect('/')

})

router.get('/logout', (req, res) => {
   res.clearCookie('auth')

   res.redirect('/auth/login')
})



export default router