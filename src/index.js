const express = require('express');
const taskRouters = require('./router/taskRouters');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const MONGOURI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.qkmtj.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

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

app.listen(8080, () => {
  console.log('Servidor de pé');
});
