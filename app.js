const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const connectDB = require('./config/db');

//Load config
dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

//Logging
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//View Engine
app.engine('.hbs', exphbs({defaultLayout: 'main',extname: '.hbs'}));
app.set('view engine', '.hbs');
//app.set('views', './views');

//Routes
app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is running on ${process.env.NODE_ENV} mode on port ${PORT}`));