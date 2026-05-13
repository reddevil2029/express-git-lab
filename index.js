const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello everyone! - from B');
});

app.get('/about', (req, res) => {
    res.send('About Us: This is a team collaboration lab.');
});

app.get('/contact', (req, res) => {
    res.send('Contact: This is a team fork lab.');
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
