import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.send([
        'Rafael',
        'Weberson',
        'Zé Mané',
        'Joberson'
    ]);
});

app.listen(3333);