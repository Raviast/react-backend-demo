
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
            const clientData = {
                name: clientData.name,
                description: clientData.description,
                designation: clientData.designation,
                image: projectData.image,
            };
            const result = await this.clientDB.create(clientData);
            return result;
        } catch (error) {
            throw error
        }
    }


}



module.exports = clientService;