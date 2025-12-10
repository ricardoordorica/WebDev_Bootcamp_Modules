const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use((req, res, next) => {
    console.log(req.method, req.path);
    return next()
})

const verifyPassword =  (req, res, next) => {
    const { password } = req.query;
    if(password === 'chickennugget') {
        next();
    }
    res.send('SORRY YOU NEED A PASSWORD!!!');
}

// app.use((req, res, next) => {
//     console.log('This is my first middleware!!!');
//     return next();
//     console.log('This is my first middleware!!! - After next()');
// })
// app.use((req, res, next) => {
//     console.log('This is my second middleware!!!');
//     return next();
// })
// app.use((req, res, next) => {
//     console.log('This is my third middleware!!!');
//     return next();
// })

app.get('/', (req, res) => {
    res.send('HOME PAGE!');
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF!');
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: I use a thong')
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!!!');
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000');
})