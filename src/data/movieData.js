import fs from 'fs/promises';
import path from 'path';

async function getMovies() {
    const dbPath = path.resolve('./src/db.json');
    const db = await fs.readFile(dbPath, {encoding: 'utf-8'});
    
    const data = JSON.parse(db)
    
    return data.movies;
}

export default {
    getMovies,
}