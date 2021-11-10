//File nào muốn dùng biến trong .env thì require('dotenv').config()
require('dotenv').config();
// db
require('./db/db');
//import libs
const path = require('path');
const express = require('express');
const morgan = require('morgan'); /*logger http request*/
const exphbs = require('express-handlebars'); /*template engine*/
//import routes
const route = require('./routes');
const app = express();
const port = process.env.PORT;
//override post to put
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true })); //middleware để xử lí form post
app.use(express.json()); // post bằng js, vd như axios, xalmhttprequest,...
app.use(
  express.static(path.join(__dirname, 'public'))
); /* thư mục tĩnh khi gõ trên path /img/logo.png sẽ ra hình */

//Template engines
app.engine(
  'hbs',
  exphbs({
    extname: '.hbs',
    helpers: {
      increaseIndex: (a, b) => a + b,
    },
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); /* set views */
//HTTP Logger
app.use(morgan('combined'));

//init routes
route(app);

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
