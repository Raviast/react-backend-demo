const contactModal = require("../../modal/contactModal")

class contactDb {
    async get(id) {
        return await contactModal.findById(id)
    }

    async getByquery(query) {
        return await contactModal.find(query)
    }
    async create(createData) {
        return await contactModal.create(createData)
    }
}

module.exports = contactDb