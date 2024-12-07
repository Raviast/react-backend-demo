const Joi = require("joi")

const creatSubValidator = (req, res, next) => {
    const { body } = req

    try {
        const schema = Joi.object({
            email: Joi.string()
                .email() // General email format validation
                .required(),
        });
        const { error } = schema.validate(body);
        if (error) {
            res.status(400).send({ message: error.message })
            return;

        }
        next();
    }
    catch (err) {
        console.log(":::::::::", err.stack)
        return res.status(500).send(ErrorCodes[500])
    }
}

module.exports = { creatSubValidator }