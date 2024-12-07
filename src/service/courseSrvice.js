
const courseDB = require('../db/course/course.db.proccessor');
const { CourseSchema } = require('../util/schema/courseSchema');
const { courseResponseFormate } = require("../util/util")

class courseService {
    constructor() {
        this.courseDB = new courseDB();
    }

    async getCourse({ courseId }) {
        try {
            const courseDBData = await this.courseDB.get(courseId)
            if (!courseDBData) throw { code: 'course-not-found', message: `course not found` }
            return courseResponseFormate(courseDBData);

        } catch (error) {
            throw error
        }
    }
    async listCourse() {
        try {
            const courseDBData = await this.courseDB.getByquery({})
            if (!courseDBData || !courseDBData.length) throw { code: 'course-not-found', message: `course not found` }
            return courseDBData.map((item) => courseResponseFormate(item));

        } catch (error) {
            throw error
        }
    }

    async create(courseData) {
        try {
            const result = await this.courseDB.create(new CourseSchema({ ...courseData }))
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = courseService;