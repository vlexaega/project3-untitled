const mongoose = require('mongoose');

const { Schema } = mongoose;

const ImageDetailsSchema = new Schema({
    image: {
        type: String,
        required: true,
    }
}
    
);

const Images = mongoose.model("ImageDetails", ImageDetailsSchema);

module.exports = Images;