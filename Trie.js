class Node {
  constructor(alphabet) {
    this.alphabet = alphabet;
    this.prevWord = "";
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  addWord(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const alphabet = word[i];
      this.addAlphabet(alphabet, currentNode);
      currentNode = currentNode.children[alphabet];
    }
    return this;
  }

  addAlphabet(alphabet, node) {
    const childNode = new Node(alphabet);
    node.children[alphabet] || (node.children[alphabet] = childNode);
    childNode.prevWord = node.prevWord + alphabet;
  }

  findWord(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const alphabet = word[i];
      currentNode = currentNode.children[alphabet];
      if (!currentNode) return;
    }
    return currentNode;
  }

  predictWord(word) {
    const res = [];
    const node = this.findWord(word);
    const _predictWord = function _predictWord(node, res) {
      res.push(node.prevWord);
      if (node.children) {
        Object.keys(node.children).forEach(key =>
          _predictWord(node.children[key], res)
        );
      }
    };
    _predictWord(node, res);
    return res;
  }
}

const trie = new Trie();

trie
  .addWord("abc")
  .addWord("abcd")
  .addWord("abcde")
  .addWord("abcdef")
  .addWord("abcdefg")
  .addWord("abcdefgh");
console.log(trie.findWord("abcde"));
console.log(trie.predictWord("abc"));
