import express from "express";
import routes from './routes.js'
import viewEngine from './config/viewEngine.js'
import expressInit from './config/expressInit.js'

const app = express();

viewEngine(app)
expressInit(app)


app.use(routes)

app.listen(3000, () =>
    console.log("Surver is listening on http://localhost:3000")
);
