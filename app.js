const express=require('express');
const path=require('path');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const config= require('./config/database');
const cors = require('cors');
const http = require('https');


mongoose.connect(config.database, { useNewUrlParser: true }).then(
  (res) => {
   res.status(200).json({message:"Connection Failure"});
  }
).catch((err) => {
 err => console.error();
});
var app = express();
const quote = require('./routes/quote');
const port=process.env.PORT || 8080;
app.use(cors());
app.use(cors({
    origin:'*'
  }));
// view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.json());
app.use('/quote', quote);

app.get('*', (req,res) => {
   res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, process.env.IP, () => {
         console.log('Server is running on' + port);        
})