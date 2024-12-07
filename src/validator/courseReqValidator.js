const Joi = require("joi")

const getCourseValidator = (req, res, next) => {
    const { params, query } = req
    console.log("::::::", query)

    const schema = Joi.object({
        courseId: Joi.string().required()
    })

    try {
        const { error, value } = schema.validate(params);
        if (error) {
            res.status(400).send({ message: error.message })
            return;
        }
        req.locals = { value }
        next();
    }
    catch (err) {
        console.log(err)
        return res.status(500).send(ErrorCodes[500])
    }
}

const listCourseValidator = (req, res, next) => {
    const { params, query } = req
    console.log("::::::", query)

    // const schema = Joi.object({
    //     courseId: Joi.string().required()
    // })

    try {
        // const { error, value } = schema.validate(params);
        // if (error) {
        //     res.status(400).send({ message: error.message })
        //     return;
        // }
        // req.locals = { value }
        next();
    }
    catch (err) {
        console.log(err)
        return res.status(500).send(ErrorCodes[500])
    }
}

const creatCourseValidator = (req, res, next) => {
    const { body } = req

    // const schema = Joi.object({
    //     id: Joi.number().required()
    // })

    try {
        //     const { error, value } = schema.validate(params);
        //     if (error) {
        //         res.status(400).send({ message: error.message })
        //         return;
        //  
        req.locals = { value: body }
        next();
    }
    catch (err) {
        return res.status(500).send(ErrorCodes[500])
    }
}

module.exports = { getCourseValidator, creatCourseValidator, listCourseValidator }