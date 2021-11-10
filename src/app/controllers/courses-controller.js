const Course = require('../models/course');
class CoursesController {
  //GET course-detail
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => {
        res.render('courses/show', { course });
        // res.json(course);
      })
      .catch(next);
  }
  create(req, res, next) {
    res.render('courses/create');
  }
  store(req, res, next) {
    const newCourse = new Course({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      videoID: req.body.videoID,
      slug: req.body.slug,
    });
    newCourse
      .save()
      .then((saveCourse) => {
        res.redirect(`/courses/${newCourse.slug}`);
      })
      .catch(next);
  }
  edit(req, res, next) {
    Course.findById(req.params.id)
      .lean()
      .then((course) => {
        res.render('courses/create', { course });
      })
      .catch(next);
  }
  saveEdit(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect('/me/stored/courses');
      })
      .catch(next);
  }
  delete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect('back');
      })
      .catch(next);
  }
}
module.exports = new CoursesController();
