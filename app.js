const express = require('express');
require('dotenv').config();
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const newMsgRouter = require('./routes/newMsgRouter');

const app = express();

// Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

// Routes

app.use('/', indexRouter); 
app.use('/new', newMsgRouter);

// Server listening..
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Mini Msg Board is listening on port ${PORT}!`);
});