// 1. Brute Force
// tc - O(n) and sc - O(n)
const validPalindrome = s => {

    // Remove non-alphanumeric char and convert to lower cases 
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

    // compare the string with its reverse
    for(let i = 0; i < s.length / 2; i++) {
        if(s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

// without regex
const isPalindrome = s => {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanString = "";
    for (let i = 0; i < s.length; i++) {
      const char = s[i].toLowerCase();
      if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
        cleanString += char;
      }
    }
    
    // Compare the string with its reverse
    for (let i = 0; i < cleanString.length / 2; i++) {
      if (cleanString[i] !== cleanString[cleanString.length - 1 - i]) {
        return false;
      }
    }
    
    return true;
  }

  // Two Pointers
  const isPalindrome2 = s => {
    s = s.toLowerCase();

    let i = 0, j = s.length - 1;

    // compare characters from left and right pointers
    while (i < j) {
        while (i < j && !isAlphanumeric(s[i])) {
          i++;
        }

        while (i < j && !isAlphanumeric(s[j])) {
          j--;
        }

        if (s[i] !== s[j]) {
          return false;
        }

        i++;
        j--;
    }
      
    return true;
  }
  

const isAlphanumeric = char => {
    const code = char.charCodeAt(0);
    return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
}