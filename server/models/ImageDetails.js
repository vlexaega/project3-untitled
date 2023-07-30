const mongoose = require('mongoose');

const { Schema } = mongoose;

const ImageDetailsSchema = new Schema(
    {
        image: {
            type: String
        },
    },
);

const Images = mongoose.model("ImageDetails", ImageDetailsSchema);

module.exports = Images;