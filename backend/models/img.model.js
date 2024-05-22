const mongoose = require("mongoose");
const imgSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true },
});
const Image = mongoose.model("Image", imgSchema);
module.exports = Image;
