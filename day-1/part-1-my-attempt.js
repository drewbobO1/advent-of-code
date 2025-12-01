const fs = require('node:fs');

// function lineCount( text ) {
//     var nLines = 0;
//     for( var i = 0, n = text.length;  i < n;  ++i ) {
//         if( text[i] === '\n' ) {
//             ++nLines;
//         }
//     }
//     return nLines;
// }

function getRawInput() {
    // let dataAsString = "this variable hasn't changed";
    let dataAsString = fs.readFile('day-1-input.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
        }
        if (data) {
            // console.log("Got the data heh: ", data.toString());
            const dataAsString = data.toString();
            return dataAsString;
        }
    });

    console.log(dataAsString);
    // return ;
}

function printInput() {
    const rawInputString = getRawInput();
    console.log(rawInputString);
}

// getRawInput();
printInput();

// function 

// const rawInput = getRawInput();

// console.log(rawInput);