const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');
const router = require('./routes/tasks');

app.use(methodOverride('_method', {methods: ['POST', 'GET']}));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));

// Database Connect
if (process.env.NODE_ENV === "test")
    mongoose.connect('mongodb://localhost:27017/Students_DB', 
        { useNewUrlParser: true, useUnifiedTopology: false }
    );
else
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Students_DB', 
        { useNewUrlParser: true, useUnifiedTopology: false }
    );

mongoose.set("useCreateIndex", true);
const db = mongoose.connection;
db.once("open", () => {
    console.log("Successfully Connected To MongoDB Using Mongoose!");
});
// mongoose.connect('mongodb://localhost:27017/ToDo', {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/', router);

// app.listen(3000, ()=>console.log('express started!'));
// Port
app.listen(3000, ()=>console.log('express started!'));
if(process.env.NODE_ENV === "test") app.set("port", 3001);
else app.set("port", process.env.PORT || 3000);