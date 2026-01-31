
function isPallindrome(src) {
    // we can check the size of element as an edge case

    const srcSize = src.length;
    let startItr = 0;
    let endItr = srcSize - 1;
    
    while (startItr < endItr){
        if (src[startItr] !== src[endItr]){
            return false;
        }
        ++startItr;
        --endItr;
    }

    return true;
}

console.log(isPallindrome('ABBA'));
console.log(isPallindrome('ABCBA'));
console.log(isPallindrome('ABCCBA'));
console.log(isPallindrome('ABCCCBA'));
console.log(isPallindrome('TAMATAM'));