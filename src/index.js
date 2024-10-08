import express from "express";
import routes from './routes.js'
import viewEngine from './config/viewEngine.js'
import expressInit from './config/expressInit.js'
import './config/mongooseInit.js'
import mongooseInit from "./config/mongooseInit.js";

const app = express();

mongooseInit()
viewEngine(app)
expressInit(app)


app.use(routes)

app.listen(3000, () =>
    console.log("Surver is listening on http://localhost:3000")
);
 