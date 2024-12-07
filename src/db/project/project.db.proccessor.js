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
    async update(uid, updateData) {
        console.log(updateData)
        return await projectModal.findOneAndUpdate({ _id: uid }, { $set: { ...updateData } })
    }

    async delete(id) {

    }
}

module.exports = projectDb