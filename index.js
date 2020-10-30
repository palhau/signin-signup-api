const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import Routes
const authRoute = require('./routes/login');
const registerRoute = require('./routes/register');
const searchUser = require('./routes/searchUser');

dotenv.config();

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log('MongoDB Connected!');
  },
);

//Middleware
app.use(express.json());

// Route Middlewares
app.use('/api/login', authRoute);
app.use('/api/register', registerRoute);
app.use('/api/search', searchUser);

app.listen(3000, () => console.log('Server Up and running'));
