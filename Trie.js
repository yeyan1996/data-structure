class TrieNode {
    constructor() {
        //经过当前节点的次数
        this.path = 0
        //到当前节点的字符串有几个
        this.end = 0
        this.next = Array.from(new Array(26))
        this.prevStr = ""
        this.currentWord = null
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    //在字典树中插入字符串
    insert(str) {
        let node = this.root
        for (let i = 0; i < str.length; i++) {
            let index = str.charCodeAt(i) - 'a'.charCodeAt(0)
            //没有当前字符串对应字母的节点就新建一个
            if (!node.next[index]) node.next[index] = new TrieNode()
            //每次遍历字符串的一个字母则path++
            node.next[index].path++
            node.next[index].currentWord = str[index]
            if (!node.next[index].prevStr) node.next[index].prevStr = str.slice(0, i + 1)
            node = node.next[index]
        }
        //遍历完字符串停留在当前字符串的最后一个节点,end++表示这个节点出现的相同字符串的次数
        node.end++
    }

    search(str) {
        let node = this.root
        for (let i = 0; i < str.length; i++) {
            let index = str.charCodeAt(i) - 'a'.charCodeAt(0)
            if (!node.next[index]) return undefined
            node = node.next[index]
        }
        return node
    }

    delete(str) {
        if (!this.search(str)) throw new Error('没有对应的字符串')
        let node = this.root
        for (let i = 0; i < str.length; i++) {
            let index = str.charCodeAt(i) - 'a'.charCodeAt(0)
            if (!--node.next[index].path) {
                node.next[index] = undefined
                return
            }
            node = node.next[index]
        }
        node.end--
    }

    show(str) {
        if (!this.search(str)) throw new Error('没有对应的字符串')
        let node = this.search(str)
        this._show(node)
    }

    _show(node) {
        for (let i = 0; i < 26; i++) {
            if (node.next[i]) {
                console.log(node.prevStr)
                this._show(node.next[i])
            }
        }
    }
}

let trie = new Trie()
trie.insert('abc')
trie.insert('abcd')
trie.insert('abcde')
trie.insert('abcdef')
trie.insert('abcdefg')
trie.insert('abcdefgh')

console.log(trie.search('abc').end)
trie.delete('abc')
console.log(trie.search('abc'))
trie.show('abcd')
