const crypto = require('crypto');
let size = 48;
require('crypto').randomBytes(size, function(err, buffer) {
  let secureHex = buffer.toString('hex');
  console.log(secureHex)
});

//A 
function randomHex () {
    const randomHexes = {
        "title": "3 Secure Randoms", 
        "randoms": []
    };

    let size = 48;
    crypto.randomBytes(size, function(err, buffer) {
        let secureHex = buffer.toString('hex');
        let hex48 = {
            "length": buffer.length,
            "random": secureHex
        }

        size = 40;
        crypto.randomBytes(size, function(err, buffer) {
            let secureHex = buffer.toString('hex');
            let hex40 = {
                "length": buffer.length,
                "random": secureHex
            }

            size = 32;
            crypto.randomBytes(size, function(err, buffer) {
                let secureHex = buffer.toString('hex');
                let hex32 = {
                    "length": buffer.length,
                    "random": secureHex
                }

                randomHexes.randoms = [hex48,hex40,hex32]; 

                console.log(randomHexes);
              });
          });
      });
}

//randomHex();


//B
//const crypto = require("crypto");

function makeSecureRandom(size) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(size, function (err, buffer) {
      if (err) {
        return reject(err);
      }
      resolve(buffer.toString("hex"));
    });
  });
}

makeSecureRandom(48).then(console.log);
makeSecureRandom(40).then(console.log);
makeSecureRandom(32).then(console.log);
makeSecureRandom(30).then(console.log);

module.exports.makeSecureRandom = makeSecureRandom;