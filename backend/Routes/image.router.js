const express = require("express");
const {
    createImg,
    getAllImage,
    updateImage,
    deleteImage,
    fetchSigleImage,
} = require("../controllers/img.controller");
const router = express();
router.route("/image").post(createImg).get(getAllImage).put(updateImage);
router.route("/image/:id").put(updateImage).delete(deleteImage).get(fetchSigleImage)
module.exports = router;
