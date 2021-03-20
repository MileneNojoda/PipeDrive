const express = require('express');
const app = express();
const lib = require('pipedrive');

const PORT = 1800;

lib.Configuration.apiToken = '5a44cc891d0235e893a02ecdc7628104072ad2f0';

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', async (req, res) => {
    const user = await lib.UsersController.getCurrentUserData();
    const persons = await lib.PersonsController.getAllPersons(user.data.id);

    console.log(persons);
    res.send(persons);
});

