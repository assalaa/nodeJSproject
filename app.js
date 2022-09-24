const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());


//Import ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


//DB CONNECT
mongoose.connect(process.env.DB_CONNECTION, 
() => console.log('connected to DB!')
);

//server
const PORT = 3000;
app.listen(
    PORT,
    () => console.log(`it's alive on ${PORT}`)
);