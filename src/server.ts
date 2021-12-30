import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json ({ message: 'Olá Héctor'});
});

app.listen (8080, () => {
    console.log ('Server inicializate on port 8080')
});
