var express = require('express');
var app = express();
const path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

const db = require('./config/database');

mongoose.Promise = global.Promise;


mongoose.connect(db.mongoURI, {
  useMongoClient: true
})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

 require('./models/Details');
 const Details = mongoose.model('details');



app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
      res.render('index')
   });


app.post("/ifsc",(req,res)=>{

   Details.find({ifsc:req.body.ifsc_code.trim().toUpperCase()}, (err, posts) => {
      res.render('ifsc', { posts: posts})
   });
});

app.post("/city_name",(req,res)=>{

   Details.find({city:req.body.b.city.trim().toUpperCase(),bank_name:req.body.b.name.trim().toUpperCase()}, (err, posts) => {
      res.render('name_branch', { posts: posts})
   });
});

// Listen
const port = process.env.PORT|| 3000;
app.listen(port, () => {
    console.log('Server listing on 3000');
})