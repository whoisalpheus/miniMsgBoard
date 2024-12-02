const { Router } = require('express');

const indexRouter = Router();

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

indexRouter.get('/', (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages }); // Messages logic....
});

// indexRouter.get('/', (req, res) => res.send('This is the mini msg board home page'));

module.exports = indexRouter;