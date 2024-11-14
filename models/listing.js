const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    title: {
        type:String,
        default: true,
    },
    description: String,
    
    image: {
        filename: String,
        url: String,
    },

    Price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing;
