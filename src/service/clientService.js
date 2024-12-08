
const clientDB = require('../db/client/client.db.proccessor');


class clientService {
    constructor() {
        this.clientDB = new clientDB()
    }

    async getAllClient() {
        try {
            const result = this.clientDB.getByquery({});
            return result ? result : [];
        } catch (error) {
            throw error
        }
    };

    async addClient(clientData) {
        try {
            const clientdata = {
                name: clientData.name,
                description: clientData.description,
                designation: clientData.designation,
                image: clientData.image,
            };
            const result = await this.clientDB.create(clientdata);
            return result;
        } catch (error) {
            throw error
        }
    }


}



module.exports = clientService;