import express from 'express';


const app = express();

app.get('/', (req, res) => {
   res.send('Hi there')
})


app.listen(3000, () => console.log('Surver is listening on http://localhost:3000'))