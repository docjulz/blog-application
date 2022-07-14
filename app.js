// FOR THE EXPRESS FILE
const express = require('express');
// FOR THE MORGAN 3rd PARTY MIDDLEWARE FILE
const morgan = require('morgan');
// FOR MONGOOSE
const mongoose = require('mongoose')
// Import Blog Model...not using anymore here. move to routes folder
// const Blog = require('./models/blog');
// const { render } = require('ejs');
// import express router
const blogRoutes = require('./routes/blogRoutes')


// Set up the Express App.
// create a function and invoke that instance
// naming convention is to name "app". also name file "app.js" too.
const app = express();

// For MONGO DB CONNECTION STRING
const dbURI = 'mongodb+srv://hulzminh:Test2345!@cluster0.hgkph.mongodb.net/NodeJS-Training?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    // .then((result) => console.log('connected to db'))
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// REGISTER VIEW ENGINE using EJS
    // EJS allows us to use dynamic content for HTML (ie blogs and user driven stuff)
app.set('view engine', 'ejs')

// app.use(express.static('public'))

//3rd PARTY MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));  // Needed for Form Data
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});



// Routes

// now need to set up a get request response
app.get('/', (req, res) => {    // listen for just homepage here
  res.redirect('/blogs');
});
app.get('/about', (req, res) => {    // simply change path to add new page!!
  res.render('about', {title: "About"});
})
app.get('/contact', (req, res) => {    
  res.render('contact', {title: "Contact"});
})

// Blog Routes
// ** ROUTES MOVED TO ./routes/blogRoutes
// now bring back in
app.use('/blogs', blogRoutes);



/* REDIRECTS AND 404 PAGES */
// in the Server file we used Switch statements
// just use a new get

// Redirects
app.get('/about-us',(req, res) => {
    res.redirect('/about');
}) 
// 404 pages USE Function
// much simpler, does all under the hood
// express goes down the file and finds all pages.  when none are available, it can fire this 404
// make sure this goes at the end of teh routing pages handlers as a catchall
// ** must add the status(404) since otherwise it wont see this as an error
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname})

    res.status(404).render('404');
})