import express from 'express';
import handlebars from 'express-handlebars'

const app = express();

app.engine('hbs', handlebars.engine({
    extname:'hbs'
}));



app.get('/', (req, res) => {
   res.send('Hi there')
})


app.listen(3000, () => console.log('Surver is listening on http://localhost:3000'))