const connectTomongo = require('./db');
const express = require('express')

connectTomongo();
const app = express()
const port = 3000

app.use(express.json());

app.use('/api/auth' ,require('./routes/auth'));
app.use('/api/testimony' ,require('./routes/testimony'));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})