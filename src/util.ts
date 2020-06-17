export default function checkBrackets(needCheckStr: string): boolean {
    const needCheckBracketitems: string[] = needCheckStr.split('');
    const popEdBracketitems: string[] = [];
    const leftBracketsReg = /\(|\{|\[/;
    const bracketPairsRef = /\(\)|\{\}|\[\]/
    let currentBracketStr = needCheckBracketitems.shift();
    while(currentBracketStr) {
        if (leftBracketsReg.test(currentBracketStr)) {
            popEdBracketitems.push(currentBracketStr)
        } else {
            if (!bracketPairsRef.test(popEdBracketitems.pop() + currentBracketStr)) {
                return false
            }
        }
        currentBracketStr = needCheckBracketitems.shift();
    }
    return popEdBracketitems.length === 0;
}