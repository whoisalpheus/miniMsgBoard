const { Router } = require('express');

const indexRouter = Router();

// const messages = [
//     {
//         text: 'Hi there!',
//         user: 'Armando',
//         added: new Date()
//     },
//     {
//         text: 'Hello world!',
//         user: 'Charles',
//         added: new Date()
//     }
// ];

indexRouter.get('/', (req, res) => res.send('This is the mini msg board home page'));

module.exports = indexRouter;