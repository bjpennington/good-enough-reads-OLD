const express = require('express');
const router = express.Router();

let books = ['The Guy Not Taken', 'Career of Evil', 'The Expatriates', 'The Misfortune of Marion Palm'];

router.get('/', (req, res) => {
    res.send(books);
});

router.post('/', (req, res) => {
    newBook = req.body.book;
    books.push(newBook);
    res.send(books);
});

router.put('/', (req, res) => {

});

router.delete('/:id', (req, res) => {
    let bookToDelete = req.params.id;
    books.splice(bookToDelete, 1);
    res.send(books);
})

module.exports = router;