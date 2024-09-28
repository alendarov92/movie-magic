import handlebars from "express-handlebars";

export default function viewEngine(app) {
    app.engine(
        "hbs",
        handlebars.engine({
            extname: "hbs",
        })
    );

    app.set("view engine", "hbs");
    app.set("views", "./src/views");

};