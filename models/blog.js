const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Mongoose createing schema and what properties should be
// this is the blog structure
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true} )

// Model
// model surrounds and gives interface to communicate with DB
// it will search for the blogs collection in NodeJS-Training called NodeJS-Train
const Blog = mongoose.model('NodeJS-train', blogSchema) // name important. also capitalize const for convention

module.exports = Blog;