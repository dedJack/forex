const connectTomongo = require('./db');
const express = require('express')
var cors = require('cors')


connectTomongo();
const app = express()
const port = 6000

app.use(cors());
app.use(express.json());

app.use('/api/auth' ,require('./routes/auth'));
// app.use('/api/testimony' ,require('./routes/testimony'));

app.listen(port, () => {
  console.log(`Forex listening on port http://localhost:${port}`)
});