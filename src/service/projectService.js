
const projectDB = require('../db/project/project.db.proccessor');


class projectService {
    constructor() {
        this.projectDB = new projectDB()
    }

    async getAllProject() {
        try {
            const result = this.projectDB.getByquery({});
            return result ? result : [];
        } catch (error) {
            throw error
        }
    };

    async addProject(projectData) {
        try {
            const projectata = {
                name: projectData.name,
                description: projectData.description,
                image: projectData.image,
            };
            const result = await this.projectDB.create(projectata);
            return result;
        } catch (error) {
            throw error
        }
    }


}



module.exports = projectService;