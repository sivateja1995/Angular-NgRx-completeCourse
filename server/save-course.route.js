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
exports.saveCourse = void 0;
var db_data_1 = require("./db-data");
function saveCourse(req, res) {
    console.log("Saving course ...");
    var id = req.params["id"], changes = req.body;
    db_data_1.COURSES[id] = __assign(__assign({}, db_data_1.COURSES[id]), changes);
    setTimeout(function () {
        res.status(200).json(db_data_1.COURSES[id]);
    }, 2000);
}
exports.saveCourse = saveCourse;
