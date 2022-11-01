"use strict";
exports.__esModule = true;
exports.searchLessons = void 0;
var db_data_1 = require("./db-data");
function searchLessons(req, res) {
    console.log('Searching for lessons ...');
    var queryParams = req.query;
    var courseId = queryParams.courseId, filter = queryParams.filter || '', sortOrder = queryParams.sortOrder || 'asc', pageNumber = parseInt(queryParams.pageNumber) || 0, pageSize = parseInt(queryParams.pageSize);
    var lessons = Object.values(db_data_1.LESSONS).filter(function (lesson) { return lesson.courseId == courseId; }).sort(function (l1, l2) { return l1.id - l2.id; });
    if (filter) {
        lessons = lessons.filter(function (lesson) { return lesson.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0; });
    }
    if (sortOrder == "desc") {
        lessons = lessons.reverse();
    }
    var initialPos = pageNumber * pageSize;
    console.log("Retrieving lessons page starting at position ".concat(initialPos, ", page size ").concat(pageSize, " for course ").concat(courseId));
    var lessonsPage = lessons.slice(initialPos, initialPos + pageSize);
    res.status(200).json(lessonsPage);
}
exports.searchLessons = searchLessons;
