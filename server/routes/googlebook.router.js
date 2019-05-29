const express = require('express');
const router = express.Router();

const axios = require('axios');

router.get('/', (req, res) => {
    let newBook = {};
    axios.get('https://www.googleapis.com/books/v1/volumes?q=_vKs2MVSxwIC')
        .then(response => {
            console.log(response.data);
            newBook = response.data;
            res.send(newBook);
        })
        .catch(error => {
            console.log('Error on GoogleBooks api get:', error);
            res.sendStatus(500);
        });
});

module.exports = router;