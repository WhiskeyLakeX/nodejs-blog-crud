const Course = require("../models/Course");
const mongooseUlils = require("../../utils/mongooseDataHandler");

class SiteController {
  // [GET] /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: mongooseUlils.multipleMongooseToObject(courses),
        });
      })
      .catch((error) => {
        next(error);
      });
  }

  // [GET] /
  introduction(req, res) {
    res.render("introduction");
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
