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

// let testVar = "original";
let readingPos = 0;

function printInput() {

    const rawInputString = getRawInput();
    // console.log(lineCount(rawInputString));
    // console.log(rawInputString.length);
    // console.log(rawInputString[17187]);
    // console.log("Test: ", testVar);
    readLine(rawInputString);
}

function readLine(input) {
    console.log("In reading line");
    if (input[readingPos] === 'L' || input[readingPos] === 'R') {
        console.log("In L or R block");
       
        let movementStr = '';
        movementStr = input[readingPos];

        console.log("Movement str in reading func: ", movementStr);

        readingPos += 1;

        if (typeof(parseInt(input[readingPos])) === "number") {
            console.log("First num of line: ", input[readingPos]);
            
            movementStr += input[readingPos];
            readingPos += 1;
        }

        // Why is this reading firing even on NaN???
        if (typeof(parseInt(input[readingPos])) === "number" && parseInt(input[readingPos]) !== NaN) {
            console.log("Second num of line: ", input[readingPos]);

            movementStr += input[readingPos];
            readingPos += 1;
        }
        
        if (typeof(parseInt(input[readingPos])) === NaN) {
            // Start next line
            console.log("New line char block: ", input[readingPos]);

            
            moveDial(movementStr);
            
            readingPos += 1;
            readLine(input);
        } else if (typeof(parseInt(input[readingPos+1])) === undefined) {
            return;
        }


    } 
}

function moveDial(movementStr) {
    if (movementStr[0] === 'L') {
        movementStr[0] = '-';
    } else {
        movementStr[0] = '+';
    }

    const numToMoveDial = parseInt(movementStr);

    console.log("Num to move dial: ", numToMoveDial);
}

function getZeroQty() {
    
}

printInput();