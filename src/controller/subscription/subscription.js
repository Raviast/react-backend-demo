const subService = require('../../service/subService')

module.exports = async (req, res, next) => {
    try {
        const SubService = new subService();
        const value = req.body
        const result = await SubService.subscription(value)
        return res.status(200).send(result)
    } catch (error) {
        if (error.code && error.message) {
            return res.status(400).send({ code: error.code, message: error.message })
        }
        console.error('error', error.stack)
        res.status(500).send({ message: 'Internan Server error' })
    }
}