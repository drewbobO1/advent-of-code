const fs = require('node:fs');

fs.readFile('day-1-input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Got the data heh: ", data);
});