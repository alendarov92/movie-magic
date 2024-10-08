import handlebars from "express-handlebars";

export default function viewEngine(app) {
    app.engine(
        "hbs",
        handlebars.engine({
            extname: "hbs",
            helpers: {
                rating: function(rating) {
                    if (!Number.isInteger(rating)) {
                        return 'n\\a';
                     }
                     return '&#x2605;'.repeat(rating);
                }
            }
        })
    );

    app.set("view engine", "hbs");
    app.set("views", "./src/views");

};