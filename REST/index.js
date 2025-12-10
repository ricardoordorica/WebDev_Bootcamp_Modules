const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');
uuid();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!',
        upvotes: 45,
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog',
        upvotes: 32,
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd',
        upvotes: 3,
    },
    {
        id: uuid(),
        username: 'onlysaywoof',
        comment: 'woof woof woof',
        upvotes: 13,
    },
];

// index
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

// new
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

// create 
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    const id = comments.length + 1;
    comments.push( { username: username, comment: comment, id: uuid(), upvotes: 0 } );
    res.redirect('/comments');
})

// show
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
})

// edit
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
})

// update
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const username = req.body.username;
    const foundComment = comments.find(c => c.id === id);
    if (username === foundComment.username) {
        foundComment.comment = newCommentText;
    } else {
        // alert('Wrong username. Comment not updated!');
        console.log('Wrong username. Comment not updated!')
    }
    res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

// --------------------------------------
app.get('/tacos', (req, res) => {
    res.send('get /tacos repsonse');
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`);
})

app.listen(3000, () => {
    console.log('on port 3000!');
})


