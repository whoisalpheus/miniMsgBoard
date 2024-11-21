const express = require('express');
require('dotenv').config();
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const newMsgRouter = require('./routes/newMsgRouter');

const app = express();

// Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes

const messages = [
    {
        text: 'Hi there!',
        user: 'Armando',
        added: new Date()
    },
    {
        text: 'Hello world!',
        user: 'Charles',
        added: new Date()
    },
    {
        text: "What's up!?",
        user: 'Jason',
        added: new Date()
    }
];

app.use(express.urlencoded({ extended: true }));

// EJS routes...
app.get('/', (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages }); // Messages logic....
});

app.get('/new', (req, res) => {
    res.render('form');
});

app.post('/new', (req, res) => {
    res.render('form', messages.push({ text: messageText, user: messageUser, added: new Date() }));
    res.redirect('/');
});

// Route for new messages
// app.post('/new', (req, res) => {});

// Express routes...
app.use('/', indexRouter); 
// app.use('/new', newMsgRouter);

// Server listening..
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Mini Msg Board is listening on port ${PORT}!`);
});