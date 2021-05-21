const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 4242;

app.use(express.static(path.join(__dirname, '..', 'client', 'public')))

app.listen(port, () => {
  console.log(`Server is up and at em' listening on port: ${port}`)
})