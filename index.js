const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! This is the main branch.');
});

app.get('/about', (req, res) => {
    res.send('About Us: This is a team collaboration lab.');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
