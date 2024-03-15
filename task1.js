const express = require('express');
const { Caesar } = require('caesar-salad');
const app = express();
const port = 8000;

//Задание первый

app.get('/:message', (req, res) => {
    const message = req.params.message;
    res.send(message);
});


//Задание вторая

const password = 'password';

app.get('/encode/:text', (req, res) => {
    const text = req.params.text;
    const encodedText = Caesar.Cipher(password).crypt(text);
    res.send(encodedText);
});

app.get('/decode/:text', (req, res) => {
    const text = req.params.text;
    const decodedText = Caesar.Decipher(password).crypt(text);
    res.send(decodedText);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});