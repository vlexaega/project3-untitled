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
    description: {
        type: String,
        required: false,
    },
    isOriginal: {
        type: Boolean,
        required: true,
    },
    medium: {
        type: String,
        required: true,
    },
    canCritique: {
        type: Boolean,
        required: false,
    },
    canDownload: {
        type: Boolean,
        required: false,
    },
    downloadPrice: {
        type: Number,
        required: false,
    },
    canPurchase: {
        type: Boolean,
        required: false,
    },
    purchasePrice: {
        type: Number,
        required: false,
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