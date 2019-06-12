const express = require('express');
const router = express.Router();

const axios = require('axios');

router.get('/', (req, res) => {
    let apiQuery = 'https://www.googleapis.com/books/v1/volumes?q=';
    let queryParams =  '';
    let searchRequest = req.query.searchTerms.split(" ");
    let booksList = {};

    // loop through array of search request words to concatenate query string
    for (let i = 0; i < searchRequest.length; i++) {
        queryParams = queryParams + '+' + searchRequest[i];
    }
    // remove leading '+' from query string
    queryParams = queryParams.substring(1);
    // add query string to url
    apiQuery = apiQuery += queryParams;

    axios.get(apiQuery)
        .then(response => {
            newBook = response.data;
            res.send(booksList);
        })
        .catch(error => {
            console.log('Error on GoogleBooks api get:', error);
            res.sendStatus(500);
        });
});

module.exports = router;