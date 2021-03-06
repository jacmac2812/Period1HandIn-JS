const http = require('http');
const OSReader = require('./OSreader');
const DOS_Detector = require('./dosDetector');

const server = http.createServer((req, res) => {
  DOSDetector.addUrl("https://nodejs.org/api/events.html")
  if (req.url === "/api/os-info") {
    res.setHeader("Content-Type", "application/json");
    const osread = new OSReader();
    console.log(osread.OSread());
    //Return a response with OS-info, using the code implemented in part-a
    res.write(JSON.stringify(osread.OSread()));
    return res.end();
  }
  if (req.url === '/') {
    
    res.setHeader("Content-Type", "text/html");
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
});
server.listen(3000);
console.log('listening on 3000');
//Register for the "DosDetected" event and console.log the url and time info.
