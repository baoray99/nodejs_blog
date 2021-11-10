const Course = require('../models/course');

class SiteController {
  //GET news
  home(req, res, next) {
    Course.find({})
      .lean() /* dùng lean để convert mongodoc sang object*/
      .then((courses) => {
        // courses = courses.map((course) => {
        //   course.toObject();
        // });
        res.render('home', { courses });
      })
      .catch(next);
  }
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
