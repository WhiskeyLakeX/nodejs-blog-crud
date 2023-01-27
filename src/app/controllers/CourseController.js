const Course = require("../models/Course");
const mongooseUlils = require("../../utils/mongooseDataHandler");

class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", {
          course: mongooseUlils.singleMongooseToObject(course),
        });
      })
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id).then((course) =>
      res.render("courses/edit", {
        course: mongooseUlils.singleMongooseToObject(course),
      })
    );
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // [POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;

    const course = new Course(req.body);
    course.save().then(() => {
      res.redirect("/");
    });
  }
  // [DELETE] /courses/:id
  delete(req, res, next) {
  Course.deleteOne({_id:req.params.id}, req.body)
    .then(() => {
      res.redirect('back')
    })
    .catch(next)
  }

}

module.exports = new CourseController();
