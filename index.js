const express = require('express');
const app = new express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>GOOD EVENING LADIES AND GENTELMEN</h1>');
});


app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});