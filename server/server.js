const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

const googlebookRouter = require('./routes/googlebook.router');
const booksRouter = require('./routes/books.router');

app.use('/api/googlebook', googlebookRouter);
app.use('/api/books', booksRouter);

app.listen(port, function() {
    console.log('Listening on port', port);
});