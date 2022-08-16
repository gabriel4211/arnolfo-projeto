const mongoose = require('mongoose');
const uri = "mongodb+srv://gabriel09:ddtank09@cluster0.u8tufxj.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri)

module.exports = mongoose