import ServerHelper from './serverhelper'


const serverHelper = new ServerHelper();
const express = require('express');
const app = express();
const lib = require('pipedrive');

const PORT = 1800;

lib.Configuration.apiToken = '5a44cc891d0235e893a02ecdc7628104072ad2f0';

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});



export default class Server {

    public async getAllPersons() {
        const user = await lib.UsersController.getCurrentUserData();
        const persons = await lib.PersonsController.getAllPersons(user.data.id);

        console.log(user.data.id);
        return persons;

    }

}