"use strict";
exports.__esModule = true;
exports.loginUser = void 0;
var db_data_1 = require("./db-data");
function loginUser(req, res) {
    console.log("User login attempt ...");
    var _a = req.body, email = _a.email, password = _a.password;
    var user = (0, db_data_1.authenticate)(email, password);
    if (user) {
        res.status(200).json({ id: user.id, email: user.email });
    }
    else {
        res.sendStatus(403);
    }
}
exports.loginUser = loginUser;
