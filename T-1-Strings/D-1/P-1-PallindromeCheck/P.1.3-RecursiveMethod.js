
function isPallindrome(start, end, src) {
    if (start >= end){
        return true;
    }

    if (src[start] !== src[end]){
        return false;
    }

    return isPallindrome(start + 1, end - 1, src );
}

console.log(isPallindrome(0, 3,'ABBA'));
console.log(isPallindrome(0, 4,'ABCBA'));
console.log(isPallindrome(0, 5,'ABCCBA'));
console.log(isPallindrome(0, 6,'ABCCCBA'));
console.log(isPallindrome(0, 6,'TAMATAM'));