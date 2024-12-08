const contactDB = require('../db/contact/contact.db.proccessor');


class contactService {
    constructor() {
        this.contactDB = new contactDB()
    }

    async getAllContact() {
        try {
            const result = this.contactDB.getByquery({});
            return result ? result : [];
        } catch (error) {
            throw error
        }
    };

    async addClient(contactData) {
        try {
            const contactData = {
                name: contactData.name,
                email: contactData.email,
                mobileNumber: contactData.mobileNumber,
                city: contactData.city,
            };
            const result = await this.contactDB.create(contactData);
            return result;
        } catch (error) {
            throw error
        }
    }


}



module.exports = contactService;