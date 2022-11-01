"use strict";
exports.__esModule = true;
exports.deleteCourse = void 0;
var db_data_1 = require("./db-data");
function deleteCourse(req, res) {
    console.log("Deleting course ...");
    var id = req.params["id"];
    var course = db_data_1.COURSES[id];
    delete db_data_1.COURSES[id];
    setTimeout(function () {
        res.status(200).json({ id: id });
    }, 2000);
}
exports.deleteCourse = deleteCourse;
