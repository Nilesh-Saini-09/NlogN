// Brute force 
const reverseString = str => {
    let reversed = '';

    for(let i = str.length; i >= 0; i--) {
        reverseString += str[i];
    }

    return reverseString;
}

// Two Pointers
const reverseString2 = str => {
    let i = 0, j = str.length - 1;

    while(i <= j) {
        [str[i], str[j]] = [str[j], str[i]];
        i++;
        j--;
    }

    return str;
}

// Built-in methods
const reverseString3 = str => {
    return str.split('').reverse().join('');
}

// recursion
const reverseString4 = str => {
    if(str === '') return '';
    else return reverseString4(str.substr(1)) + str.charAt(0);
}