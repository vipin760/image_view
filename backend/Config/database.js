const mongoose = require("mongoose");
const DB = () => {
    mongoose
        .connect("mongodb://127.0.0.1:27017/Image-view")
        .then((data) => {
            console.log("Connected to DB", data.connection.host);
        })
        .catch((error) => {
            console.log("database error");
        });
};
module.exports = DB;
