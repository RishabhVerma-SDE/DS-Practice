
function isPallindrome(src) {
    // there is no reverse function that is directly call here!
    // we can also check for lower case elementer as Level and level are also pallindrome if we ignore the case
    // we can also check for the size of element.
    const reversedSrc = src.split('').reduce((acc,item)=> acc = item + acc, ''); // master stroke => take the item at end and new item at starting to get the reverse
    const stringSize = src.length;
    for(let itr = 0; itr < stringSize; ++itr ){
        if (reversedSrc[itr] !== src[itr]){
            return false;
        }
    }
    return true;
}

console.log(isPallindrome('ABBA'));
console.log(isPallindrome('ABCBA'));
console.log(isPallindrome('TAMATAM'));