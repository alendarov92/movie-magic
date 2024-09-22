import { Router } from "express";
import movieSurvice from "../services/movieSurvice.js";

const router = Router();


router.get("/", async (req, res) => {
    const movies = await movieSurvice.getAll();

    res.render("home", { movies });
});

router.get("/about", (req, res) => {
    res.render("home/about");
});

router.get("/search", async(req, res) => {
    const movies = await movieSurvice.getAll();
    res.render("home/search", { movies });
});

export default router;
