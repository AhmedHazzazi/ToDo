const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');
const Task = require('./models/tasks');

app.use(methodOverride('_method', {methods: ['POST', 'GET']}));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/ToDo', {useNewUrlParser: true, useUnifiedTopology: true});


// insert 1
// app.get('/create', (req, res)=>{
//     const firstTask = new Task({title: 'writing insert function'});
//     firstTask.save().then(()=>console.log('new record inserted'));
// });
// insert 2
// app.post('/create', );

// find/show
// app.get('/', );
// delete
// app.delete('/delete/:id', );
// update
// app.get('/update/:id/:title', (req, res)=>{
//     Task.updateOne({_id: req.params.id}, {title: req.params.title},
//         (error)=>{
//         if(error) console.log(`there was an error: ${error}`);
//         else console.log('Task is updated!');
//     });
// });
// app.get('/update/:id/', );

// app.put('/update/:id', );

app.listen(3000, ()=>console.log('express started!'));