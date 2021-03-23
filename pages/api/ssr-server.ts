
const express = require('express');
const app = express();
const lib = require('pipedrive');

const PORT = 1800;

lib.Configuration.apiToken = '5a44cc891d0235e893a02ecdc7628104072ad2f0';

var server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});



export default class Server {

    public async getAllPersons() {
        try {
            const user = await lib.UsersController.getCurrentUserData();

            if (Number.isInteger(user.data.id)) {

                const persons = await lib.PersonsController.getAllPersons(user.data.id);
                
                server.close();
                
                return persons;
            }

            return [];
        } catch(e) {
            console.error(e);
            return [];
        }

    }

}