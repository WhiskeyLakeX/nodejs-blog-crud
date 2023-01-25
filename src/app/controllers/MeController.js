const Course = require("../models/Course");
const mongooseUlils = require("../../utils/mongooseDataHandler");

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("me/stored-courses", {
          courses: mongooseUlils.multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
