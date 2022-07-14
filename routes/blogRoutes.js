// first import express
const express = require('express');
// const Blog = require('../models/blog');  //make sure to get the right folder...Moved to blogController
// import the blogController file
const blogController = require('../controllers/blogController')

// Import express router to create a new instance of Router
const router = express.Router();


router.get('/create', blogController.blog_create_get)
router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);


// need to export the router and import in app.js
module.exports = router;