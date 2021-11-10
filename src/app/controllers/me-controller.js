const Course = require('../models/course');
class MeController {
  //GET stored course
  storedCourses(req, res, next) {
    Course.find({})
      .lean()
      .then((courses) => {
        res.render('me/stored', { courses });
      })
      .catch(next);
  }
}
module.exports = new MeController();
