let express = require('express');
let cors = require('cors');
let routes = require('./routes');
let path = require('path');
//let mongoose = require('mongoose')

//let dbUrl = 'mongodb+srv://User:User@cluster0-pn0ut.mongodb.net/test?retryWrites=true&w=majority'

let app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use(express.static(path.join(__dirname, '../client', )))

//mongoose.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    // console.log('mongo.db conection', err)
//})

app.listen(3000);
