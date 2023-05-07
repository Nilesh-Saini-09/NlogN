// 1. Brute Force
// tc - O(n^3) sc - O(n)
const validPalindrome = s => {

    // Base Case
    if (isPalindrome(s)) {
        return true;
    }

    // Generate all possible substrings by removing one character at a time
    for (let i = 0; i < s.length; i++) {
        let substr = s.slice(0, i) + s.slice(i + 1);
        
        // Check if the substring is a palindrome
        if (isPalindrome(substr)) return true;
    }

    // If none of the substrings are palindromes, return false
    return false;
}
  
  // helper function to check if a string is a palindrome.
const isPalindrome = s => {
let left = 0;
let right = s.length - 1;

while (left < right) {
    if (s[left] !== s[right]) {
    return false;
    }
    left++;
    right--;
}

return true;
}
  
// 2. Two Pointers 
// tc and sc - O(n)
const validPalindrome2 = s => {
    let left = 0, right = s.length - 1;
    
    while(left < right) {
        if(s[left] !== s[right]) {
            // check if deleting the char at the left pointer or right pointer would result in a palindrome.
            return isPalindrome(s.slice(left, right)) || isPalindrome(s.slice(left + 1, right + 1));
        }

        left++;
        right--;
    }

    return true;
}


// 3. Modified two pointer approach for constant space
// tc - O(n), sc - O(1)

const validPalindrome3 = s => {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
          return is_palindrome(s, left + 1, right) || is_palindrome(s, left, right - 1);
        }

        left++;
        right--;
    }

    return true;
}

const is_palindrome = (s, left, right) => {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    
    return true;
}