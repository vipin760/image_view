const mongoose = require("mongoose");
const DB = () => {
    mongoose
        .connect(process.env.DB_URL)
        .then((data) => {
            console.log("Connected to DB", data.connection.host);
        })
        .catch((error) => {
            console.log("database error");
        });
}; 
module.exports = DB;
