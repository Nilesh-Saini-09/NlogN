// 1. Brute force solution
// time and space - O(N*M) and O(1)
const longestCommonPrefix = strs => {
    // base case
    if(strs.length === 0 || strs === null) return '';

    let prefix = '';
    for(let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        for(let j = 1; j < strs.length; j++) {
            if(i >= strs[j].length || strs[j][i] !== char) {
                return prefix;
            }
        }

        prefix += char;
    }

    return prefix;
}

// 2. Sorting
// time and space - O(n * mlogm) and O(1)
const longestCommonPrefix2 = strs => {
    //base case
    if(strs.length === 0 || strs === null) return '';

    strs.sort();

    let first = strs[0], last = strs[strs.length - 1];
    let prefix = '';

    for(let i = 0; i < first.length; i++) {
        if(first[i] !== last[i]) break;
        prefix += first[i];
    }

    return prefix;

}

// 3. Trie
// time and space - O(mn) 
class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
    
    insert(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
        node = node.children.get(char);
      }
      node.isEndOfWord = true;
    }
    
    longestCommonPrefix() {
      let node = this.root;
      let prefix = "";
      while (node.children.size === 1 && !node.isEndOfWord) {
        const char = node.children.keys().next().value;
        prefix += char;
        node = node.children.get(char);
      }
      return prefix;
    }
  }
  
  function longestCommonPrefix(strs) {
    // base case
    if (strs.length === 0 || strs === null) return "";
    
    const trie = new Trie();
    for (const word of strs) {
      trie.insert(word);
    }
    
    return trie.longestCommonPrefix();
  }