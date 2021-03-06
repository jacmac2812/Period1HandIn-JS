const OSreader = require("./OSreader.js");
const DOS_Detector = require("./dosDetector")

const osread = new OSreader();
const DOSDetector = new DOS_Detector(1000);

DOSDetector.on("DosDetected", (e) => 
console.log(`DosDetected: ${JSON.stringify(e)}`)
);

DOSDetector.addUrl("https://nodejs.org/api/events.html")
DOSDetector.addUrl("https://nodejs.org/api/events.html")
DOSDetector.addUrl("https://nodejs.org/api/events.html")

console.log(osread.OSread());

