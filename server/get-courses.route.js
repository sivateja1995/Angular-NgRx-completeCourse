"use strict";
exports.__esModule = true;
exports.getCourseByUrl = exports.getAllCourses = void 0;
var db_data_1 = require("./db-data");
function getAllCourses(req, res) {
    console.log("Retrieving courses data ...");
    setTimeout(function () {
        res.status(200).json({ payload: Object.values(db_data_1.COURSES) });
    }, 1000);
}
exports.getAllCourses = getAllCourses;
function getCourseByUrl(req, res) {
    var courseUrl = req.params["courseUrl"];
    var courses = Object.values(db_data_1.COURSES);
    var course = courses.find(function (course) { return course.url == courseUrl; });
    setTimeout(function () {
        res.status(200).json(course);
    }, 1000);
}
exports.getCourseByUrl = getCourseByUrl;
