const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const googlebookRouter = require('./routes/googlebook.router');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.use('/api/googlebook', googlebookRouter);

app.listen(port, function() {
    console.log('Listening on port', port);
});