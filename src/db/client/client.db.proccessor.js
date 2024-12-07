const clientModal = require("../../modal/clientModal")

class clientDb {
    async get(id) {
        return await clientModal.findById(id)
    }

    async getByquery(query) {
        return await clientModal.find(query)
    }
    async create(createData) {
        return await clientModal.create(createData)
    }
}

module.exports = clientDb