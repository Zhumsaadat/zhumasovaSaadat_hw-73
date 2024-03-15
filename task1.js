const express = require('express');
const { Caesar } = require('caesar-salad');
const app = express();
const port = 8000;

//Задание первый

app.get('/:message', (req, res) => {
    const message = req.params.message;
    res.send(message);
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});