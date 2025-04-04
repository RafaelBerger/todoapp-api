const express = require('express');
const taskRouters = require('./router/taskRouters');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const MONGOURI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@todo.0gfixmx.mongodb.net/?retryWrites=true&w=majority&appName=todo`

const main = async () => {
  await mongoose.connect(MONGOURI, function (err) {
    if (err) console.log(err);
    console.log('connection successful');
  });
};

main();

const app = express();
app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json());

app.use('/', taskRouters);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log('Servidor de pé');
});
