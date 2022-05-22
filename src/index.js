const express = require('express');
const taskRouters = require('./router/taskRouters');
const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: '*',
  })
);

app.use('/', taskRouters);

app.listen(8080, () => {
  console.log('Servidor de pé');
});
