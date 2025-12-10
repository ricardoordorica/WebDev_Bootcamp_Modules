const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/moviesApp')
    .then(() => {
        console.log("CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO ERROR!!!");
        console.log(err);
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,
});

const Movie = mongoose.model('Movie', movieSchema);

// const megamind = new Movie({ title: 'Megamind', year: 2014, score: 9.3, rating: 'R' });

// Movie.insertMany([
//     { title: 'Kung Fu Panda', year: 2008, score: 9.2, rating: 'R' },
//     { title: 'Ice Age', year: 2005, score: 8.9, rating: 'R' },
//     { title: 'Shrek 2', year: 2004, score: 9.9, rating: 'R' },
//     { title: 'Interestellar', year: 2014, score: 9.6, rating: 'R' },
//     { title: 'Toy Story', year: 1999, score: 9.2, rating: 'R' },
// ])
//     .then((data) => {
//         console.log('IT WORKED!');
//         console.log(data);
//     })