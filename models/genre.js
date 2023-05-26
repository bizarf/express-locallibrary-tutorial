const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 100 },
});

// virtual for genre url
GenreSchema.virtual("url").get(function () {
    // no arrow function as we need the this object
    return `/catalog/genre/${this._id}`;
});

// export model
module.exports = mongoose.model("Genre", GenreSchema);
