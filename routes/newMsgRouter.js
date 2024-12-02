const { Router } = require('express');

const newMsgRouter = Router();

newMsgRouter.get('/new', (req, res) => res.render('form'));

newMsgRouter.post('/new', (req, res) => {
    res.render('form', messages.push({ text: messageText, user: messageUser, added: new Date() }));
    res.redirect('/');
});

module.exports = newMsgRouter;