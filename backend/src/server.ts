import express from 'express';

const app = express();

app.use(express.json());

const users = ['Rafael', 'Weberson', 'Zé Mané', 'Joberson'];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter((user) => user.includes(search)) : users;

    return response.send(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    return response.send(users[id]);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email,
    };

    return response.json(user);
});

app.listen(3333);
