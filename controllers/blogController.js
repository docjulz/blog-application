// Were all functions live
// pay attention to the naming convention based on MDN

// import again from blogRoutes since logic here now.
const Blog = require('../models/blog');  //make sure to get the right folder

// new routes are blog_index, blog_details, blog_create_get, blog_create_post, blog_delete.

// blog_index
const blog_index = (req, res) => {
    // content pulled from ../routes/blogroutes
    Blog.find().sort({createdAt: -1})   // sort descending
    .then((result) => {
        // Ref. Index.ejs the if(blogs.length)
        res.render('blogs/index', {title: 'All blogs', blogs: result})
    })
    .catch((err) => {
        console.log(err)
    })
}

//blog_details
const blog_details = (req, res) => {
    const id = req.params.id;   // This extracts id
    // console.log(id)
    Blog.findById(id) // blog model which is asynchronous
      .then(result => {
        // result is a render a 'details' page using a 'details view'. pass it the info we get
        // back which is teh 'blog' which is equal to the reult.
        // then give it a title like all other routes
        res.render('blogs/details', { blog: result, title: 'Blog Details' }); 
      })
      .catch(err => {
        console.log(err);
        res.status(404).render('404', { title: 'blog not found'})
      });
}

// blog_create_get
const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create a new blog' });
}

// blog_create_post
const blog_create_post = (req, res) => {
    // console.log(req.body);
    const blog = new Blog(req.body);  // Create new instance of Blog. pass in object

    blog.save() // save to database. it is asynchronous.
        .then(result => {
        res.redirect('/blogs');
        })
        .catch(err => {
        console.log(err);
        });
}

// blog_delete
const blog_delete = (req, res) => {
    const id = req.params.id;
  
    Blog.findByIdAndDelete(id)
    .then(result => {
     res.json({ redirect: '/blogs' }); // after delete redirect back to blogs
   })
   .catch(err => {
     console.log(err);
   });   
}


module.exports = {
    // export blog index
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}