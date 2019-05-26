const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hi, welcome to our group lab 1. You can navigate through our site by typing /about, /contact or just / in the URL.');
});

app.get('/about', (req, res) => {
    res.send('Our group consist of 3 members. Sahilpreet Singh, Gurkirat Singh and Anandpal Singh Sandhu');
});

app.get('/contact', (req, res) => {
    res.send('You can reach us at admin@media.ca or visit us in orillia.');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))