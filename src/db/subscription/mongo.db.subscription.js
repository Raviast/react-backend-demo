const subscriptionModal = require("../../modal/subscriptionModal")

class signUpReqDb {

    async findById(id) {
        return await subscriptionModal.findById(id)
    }

    async getByquery(query) {
        return await subscriptionModal.find(query)
    }
    async create(createData) {
        return await subscriptionModal.create(createData)
    }
}

module.exports = signUpReqDb