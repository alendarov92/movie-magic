import fs from 'fs/promises';
import path from 'path';

const dbPath = path.resolve('./src/db.json');
// Take all the data
async function getDb() {
    const jsonResult = await fs.readFile(dbPath, {encoding: 'utf-8'});
    
    const data = JSON.parse(jsonResult)

    return data
};


// Save the new data
 function saveDb(data) {
    return fs.writeFile(dbPath, JSON.stringify(data, {}, 2))
};

// Exporting all the data
async function getMovies() {
    const db = await getDb(); 
    
    return db.movies;
};

// Exporting the module for creating a new template
async function create(movieData) {
    const db = await getDb();

    db.movies.push(movieData);
    
    return saveDb(db);   
}

export default {
    getMovies,
    create
}