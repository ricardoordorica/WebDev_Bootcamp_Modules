const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('We got a new request!!!');
//     // res.send('Hello, we got your request. This is a response');
//     res.send('<h1>This is my web page</h1>')
// })
app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>');
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.get('/cats', (req, res) => {
    console.log('Cat request!!!');
    res.send('<h1>Meow</h1>');
})

app.post('/cats', (req, res) => {
    res.send('Post request to /cats');
})

app.get('/dogs', (req, res) => {
    console.log('Dog request!!!');
    res.send('<h1>Woof</h1>');
})

app.get('/search', (req, res) => {
    const { q, color } = req.query;
    console.log(req.query);
    res.send(`Results for ${color} ${q}`);
})

app.get('*', (req, res) => {
    res.send('IDK that path');
})


//  /cats => 'meow'
//  /dogs => 'woof'
//  /

app.listen(3000, () => {
    console.log('listening on port 3000!');
})


