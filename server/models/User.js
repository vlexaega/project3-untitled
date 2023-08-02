const mongoose = require('mongoose')

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true, 
        unique: true,
        match: [/.+@.+\..+/, 'Must be an email address'],
    },
    password: {
        type: String, 
        required: true, 
        minlength: 8,
    },
    bio: {
        type: String,
        required: false,
    },
    orders:  [{ type: Schema.Types.ObjectId, ref: 'Order' }]
});

//set up a pre-save middleware to create a password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')){
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});
//compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;