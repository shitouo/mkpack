"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkBrackets(needCheckStr) {
    const needCheckBracketitems = needCheckStr.split('');
    const popEdBracketitems = [];
    const leftBracketsReg = /\(|\{|\[/;
    const bracketPairsRef = /\(\)|\{\}|\[\]/;
    let currentBracketStr = needCheckBracketitems.shift();
    while (currentBracketStr) {
        if (leftBracketsReg.test(currentBracketStr)) {
            popEdBracketitems.push(currentBracketStr);
        }
        else {
            if (!bracketPairsRef.test(popEdBracketitems.pop() + currentBracketStr)) {
                return false;
            }
        }
        currentBracketStr = needCheckBracketitems.shift();
    }
    return popEdBracketitems.length === 0;
}
exports.default = checkBrackets;
