const connectTomongo = require('./db');
const express = require('express');
var cors = require('cors');
const auth = require('./routes/auth');
const testimony = require('./routes/testimony');
const enquiry = require('./routes/enquiry');
const admin = require('./routes/admin')

connectTomongo();
const app = express();
const port = 6000;

app.use(cors());
app.use(express.json());

app.use(auth);
app.use(testimony);
app.use(enquiry);
app.use(admin)


const server = app.listen(port, () => {
  console.log(`Forex listening on port http://localhost:${port}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Trying another port...`);
    server.listen(port + 1);
  } else {
    console.error(err);
  }
});