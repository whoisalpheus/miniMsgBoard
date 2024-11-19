const express = require('express');
require('dotenv').config();
const indexRouter = require('./routes/indexRouter');
const newMsgRouter = require('./routes/newMsgRouter');

const app = express();

// Routes
app.use('/', indexRouter); 
app.use('/new', newMsgRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Mini Msg Board is listening on port ${PORT}!`);
});