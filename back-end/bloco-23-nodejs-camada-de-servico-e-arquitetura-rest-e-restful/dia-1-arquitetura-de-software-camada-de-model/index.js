const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.listen(3000, () => {
  console.log('Atualmente trabalhando na porta 3000');
});
