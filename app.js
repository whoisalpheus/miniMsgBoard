const express = require('express');
require('dotenv').config();

const app = express();

// Routes
app.get('/', (req, res) => res.send('Mini Msg Board'));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Mini Msg Board is listening on port ${PORT}!`);
});