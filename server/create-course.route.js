"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.createCourse = exports.coursesKeyCounter = void 0;
var db_data_1 = require("./db-data");
exports.coursesKeyCounter = 100;
function createCourse(req, res) {
    console.log("Creating new course ...");
    var changes = req.body;
    var newCourse = __assign({ id: exports.coursesKeyCounter, seqNo: exports.coursesKeyCounter }, changes);
    db_data_1.COURSES[newCourse.id] = newCourse;
    exports.coursesKeyCounter += 1;
    setTimeout(function () {
        res.status(200).json(newCourse);
    }, 2000);
}
exports.createCourse = createCourse;
