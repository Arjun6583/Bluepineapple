const http = require('http')
const msg = require('./helper')
const port = 3000;
const server = http.createServer((req, res) =>{
  res.write("Welcome to Node.js!");
  res.end();
});
server.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`);
  console.log(msg.getMessage());
});

