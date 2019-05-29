const express = require('express');
const router = express.Router();

const http = require('http');
const https = require('https');

router.get('/', (req, res) => {
    https.get('https://www.googleapis.com/books/v1/volumes?q=_vKs2MVSxwIC', (resp) => {
            let data = '';
          
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
              data += chunk;
              console.log('data so far:', data);
            });
          
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                //console.log('data:', data);
                res.send(data);
              //console.log(JSON.parse(data).explanation);
            });
          
          }).on("error", (err) => {
            console.log("Error: " + err.message);
          });
    //res.send(data);
});

module.exports = router;