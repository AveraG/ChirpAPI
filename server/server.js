let express = require('express');
let cors = require('cors');
let routes = require('./routes');
let path = require('path');

let app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use(express.static(path.join(__dirname, '../client')))

app.listen(3000);
