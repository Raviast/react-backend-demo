const projectService = require('../../service/projectService')

module.exports = async (req, res, next) => {
    try {
        const ProjectService = new projectService(); 
        const projectData = req.body;
        const result = await ProjectService.addProject(projectData)
        return res.status(200).send(result)
    } catch (error) {
        if (error.code && error.message) {
            return res.status(error.httpCode).send({ code: error.code, message: error.message })
        }
        console.error('error', error.stack)
        res.status(500).send({ message: 'Internan Server error' })
    }
}