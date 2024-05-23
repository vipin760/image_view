const Image = require("../models/img.model");

exports.createImg = async (req, res) => {
    try {
        const { title, description, imgUrl } = req.body;
        const newImage = await Image.create(req.body);
        return res
            .status(200)
            .send({ status:true,message: "Successfully created the image" });
    } catch (error) {
        return res.status(500).send({status:false, message: `${error.message}` });
    }
};

exports.getAllImage = async (req, res) => {
    try {
        const images = await Image.find();
        if (images) {
            return res
                .status(200)
                .send({ message: "All images found", data: images });
        } else {
            return res.status(400).send({status:true, message: "No images found" });
        }
    } catch (error) {
        console.log(error.message)
        return res.status(500).send({status:false, message: `${error.message}` });
    }
};
exports.updateImage = async (req, res) => {
    try {
        const { title, description,_id } = req.body;
        const img = await Image.findByIdAndUpdate(_id, {
            title,
            description,
        });
        console.log(req.params, "ID");
        if (!img) {
            return res.status(400).send({status:true, message: "There is no images" });
        }
        return res
            .status(200)
            .send({status:true, message: "successfully updated images" });
    } catch (error) {
        return res.status(500).send({status:false, message: `${error.message}` });
    }
};
exports.deleteImage = async (req, res) => {
    try {
        await Image.findByIdAndDelete(req.params.id);
        return res
            .status(200)
            .send({status:true, message: "The image deleted successfully" });
    } catch (error) {
        return res.status(500).send({status:false, message: `${error.message}` });
    }
};

exports.fetchSigleImage=async(req,res)=>{
    try {
        const imgData = await Image.findById(req.params.id);
        if(imgData){
            return res
            .status(200)
            .send({status:true,data:imgData, message: "The image found successfully" });
        }
        
    } catch (error) {
        return res.status(500).send({status:false, message: `${error.message}` });
    }
}