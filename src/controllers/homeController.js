import { Router } from "express";
import movieSurvice from "../services/movieSurvice.js";

const router = Router();


router.get("/", (req, res) => {
    const movies = movieSurvice.getAll();

    res.render("home", { movies });
});

router.get("/about", (req, res) => {
    res.render("home/about");
});

router.get("/search", (req, res) => {
    res.render("home/search", { movies });
});

export default router;
