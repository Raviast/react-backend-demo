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

    async update(id, updateData) {
        return await subscriptionModal.updateOne({ _id: id }, { $set: { ...updateData } });
    }

    async delete(id) {
        return await subscriptionModal.deleteOne(id);
    }
}

module.exports = signUpReqDb