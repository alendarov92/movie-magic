import { Router } from "express";
import movieSurvice from "../services/movieSurvice.js";

const router = Router();

function toArray(documents) {
    return documents.map(document => document.toObject())
}

router.get("/", async (req, res) => {
    const movies = await movieSurvice.getAll().lean();

    res.render("home", { movies });
    
}); 

router.get("/about", (req, res) => {
    res.render("home/about");
});


export default router;
