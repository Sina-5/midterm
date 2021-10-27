/* fileName: books.js
 Student Name:Sina Pazhwak
 Student ID:301033560
 Date:2021-10-21 */

let mongoose = require("mongoose");

// create a model class
let Book = mongoose.Schema(
  {
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String,
  },
  {
    collection: "books",
  }
);

module.exports = mongoose.model("Book", Book);
