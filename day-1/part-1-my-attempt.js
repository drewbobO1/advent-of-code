const fs = require('node:fs');
const { type } = require('node:os');

function lineCount( text ) {
    var nLines = 1;
    for( var i = 0, n = text.length;  i < n;  ++i ) {
        if( text[i] === '\n' ) {
            ++nLines;
        }
    }
    return nLines;
}

function getRawInput() {
    let dataAsString = fs.readFileSync('day-1-input.txt').toString();
    return dataAsString;
}

function printInput() {
    const rawInputString = getRawInput();
    // console.log(lineCount(rawInputString));
    // console.log(rawInputString.length);
    console.log(rawInputString[17187]);
    // readLine(rawInputString);
}

printInput();

let readingPos = 0;
function readLine(input) {
    if (input[readingPos] === 'L' || input[readingPos] === 'R') {
        readingPos += 1;
        let numStr;

        if (typeof(parseInt(input[readingPos])) === "number") {
            numStr = input[readingPos];
            readingPos += 1;
        }

        if (typeof(parseInt(input[readingPos])) === "number") {
            numStr += input[readingPos];
            readingPos += 1;
        } else if (typeof(parseInt(input[readingPos+1])) === NaN) {
            // Start next line
            readingPos += 1;
            readLine(input);
        } else if (typeof(parseInt(input[readingPos+1])) === undefined) {
            return;
        }


    } 
}

function getZeroQty() {
    
}