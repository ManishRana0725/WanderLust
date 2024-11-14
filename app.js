const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
// const methodOverride = require("method-override");


app.set("views" , path.join(__dirname , "views"));
app.set("view engine" , "ejs");
app.use(express.urlencoded({extended: true}));
// app.use(methodOverride("_method"));

main().then((   )=>{
    console.log("connected to DB  ");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}




app.get("/" , (req , res)=>{
    res.send("Hi, I am root");
});

// index route
app.get("/listings" , async(req , res)=>{
    const allListings =  await Listing.find({});
    res.render("listings/index.ejs" , {allListings});
});

// show by id  route
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
});
  

// app.get("/testListing" , async(req , res)=>{
//     let sampleListing = new Listing({
//         title: "My new Villa",
//         description: "By the Beach",
//         price: 1200,
//         location: "Coorg, Karnataka",
//         country: "India"
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });


app.listen(8080 , ()=>{
    console.log("Listening to port 8080 ");
});
