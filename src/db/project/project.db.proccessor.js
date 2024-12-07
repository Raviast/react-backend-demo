const projectModal = require("../../modal/projectModal")

class projectDb {
    async get(id) {
        return await projectModal.findById(id)
    }

    async getByquery(query) {
        return await projectModal.find(query)
    }
    async create(createData) {
        return await projectModal.create(createData)
    }
}

module.exports = projectDb