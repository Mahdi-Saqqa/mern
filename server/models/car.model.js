const mongoose = require('mongoose');
 
const CarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
    imgUrl: {
        type: String,
        required: [true, "Image URL is required"],
    },
    desc: {
        type: String,
        required: [true, "Description is required"],
        minlength: [10, "Description must be at least 10 characters long"]
    },
    likes: {
        type: Number,
        default: 0
    },

}, { timestamps: true});



const Car = mongoose.model('Car', CarSchema);

module.exports = Car;