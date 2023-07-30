// This file comes from module 22 activity 24

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/untitled-art-app');

module.exports = mongoose.connection;