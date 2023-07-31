const mongoose = require('mongoose');

const { Schema } = mongoose;

const ImageDetailsSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}
    
);

const Images = mongoose.model("ImageDetails", ImageDetailsSchema);

module.exports = Images;