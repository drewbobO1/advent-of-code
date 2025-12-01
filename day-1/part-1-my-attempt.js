const fs = require('node:fs');

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
    console.log(lineCount(rawInputString));
    console.log(rawInputString.length);
}

printInput();