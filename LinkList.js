// 链表的 node 类
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkList {
    constructor() {
        //链表头元素
        this.head = null
        this.tail = null
    }

    add(data) {
        let node = new Node(data)
        if (!this.head) {
            this.head = node
            this.tail = node
        }
        this.tail.next = node
        this.tail = node
        return this
    }

    find(data) {
        let currentNode = this.head
        while (currentNode.data !== data) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    //在某个元素后插入一个元素
    findAndInsert(data, item) {
        let newNode = new Node(data)
        let currentNode = this.find(item)
        // 将新元素的下个元素指向被插入的元素的下个元素
        // currentNode -> newNode -> currentNodeNextNode
        newNode.next = currentNode.next
        currentNode.next = newNode
        return this
    }

    //展示
    display() {
        let res = []
        let currentNode = this.head
        while (currentNode) {
            res.push(currentNode.data)
            currentNode = currentNode.next
        }
        console.log(res.join(' -> '))
    }

    //寻找元素的前一个元素
    findPrev(data) {
        let currentNode = this.head
        while (currentNode.next && currentNode.next.data !== data) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    //删除指定元素
    remove(data) {
        let prevNode = this.findPrev(data)
        // prevNode -> currentNode -> currentNodeNextNode
        // 转为
        // prevNode ->  currentNodeNextNode
        prevNode.next = prevNode.next.next
    }
}

let linkList = new LinkList()

linkList.add(1).add(2).add(3)


linkList
    .findAndInsert('a', 1)
    .findAndInsert('b', 'a')
    .findAndInsert('c', 'b')

linkList.display()
linkList.remove('b')
console.log('--------------------')
linkList.display()

