const fs = require('node:fs');
// const { type } = require('node:os');

function getRawInput() {
    let dataAsString = fs.readFileSync('day-1-input.txt').toString();
    return dataAsString;
}

let readingPos = 0;
let movementsArr = [];

function printInput() {

    const rawInputString = getRawInput();
    readLine(rawInputString);
    getZeroQty(movementsArr);
}

function readLine(input) {
    if (input[readingPos] === 'L' || input[readingPos] === 'R') {
       
        let movementStr = '';
        movementStr = input[readingPos];

        readingPos += 1;

        if (typeof(parseInt(input[readingPos])) === "number") {
            movementStr += input[readingPos];
            readingPos += 1;
        }

        if (typeof(parseInt(input[readingPos])) === "number" && input[readingPos] !== '\n' && input[readingPos] !== undefined) {
            movementStr += input[readingPos];
            readingPos += 1;
        }

        if (typeof(parseInt(input[readingPos])) === "number" && input[readingPos] !== '\n' && input[readingPos] !== undefined) {
            movementStr += input[readingPos];
            readingPos += 1;
        }
        
        if (input[readingPos] === '\n') {
            // Start next line
            
            getNumToMoveDial(movementStr);
            
            readingPos += 1;
            readLine(input);
        } else if (input[readingPos+1] === undefined) {
            getNumToMoveDial(movementStr);
            return;
        }


    } 
}

function getNumToMoveDial(movementStr) {
    let valueWithSign;
    if (movementStr[0] === 'L') {
        valueWithSign = '-' + movementStr[1];
        if (movementStr.length > 2) {
            for (let i = 2; i < movementStr.length; ++i) {
                valueWithSign += movementStr[i];
            }
        }
    } else {
        valueWithSign = '+' + movementStr[1];
        if (movementStr.length > 2) {
            for (let i = 2; i < movementStr.length; ++i) {
                valueWithSign += movementStr[i];
            }
        }
    }

    const numToMoveDial = parseInt(valueWithSign);
    movementsArr.push(numToMoveDial);
}

function getZeroQty(movementsArr) {
    let lockPos = 50;
    let zeroQty = 0;
    for (let i = 0; i < movementsArr.length; ++i) {
        lockPos += movementsArr[i];
        
        if (lockPos > 100) {
            lockPos = lockPos - (Number(String(lockPos)[0]) * 100);
        }

        if (lockPos < 0) {
            // I dont think this will work
            lockPos = lockPos + (Number(String(lockPos)[0]) * 100);
        }

        if (lockPos === 0) {
            zeroQty += 1;
        }
    }

    console.log("Zero qty: ", zeroQty);
    return zeroQty;
}

printInput();