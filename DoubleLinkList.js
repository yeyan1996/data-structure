//双向链表
class Node {
    constructor(element) {
        this.element = element
        this.next = null
        this.previous = null
    }
}

class DoubleLinkList {
    constructor() {
        //链表头元素
        this.head = new Node('head')
    }

    find(item) {
        let currentNode = this.head
        while (currentNode.element !== item) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    //在某个元素后插入一个元素
    insert(element, item) {
        let newNode = new Node(element)
        let currentNode = this.find(item)
        newNode.next = currentNode.next
        newNode.previous = currentNode
        currentNode.next = newNode
    }
    //展示
    display() {
        let currentNode = this.head
        while(currentNode){
            console.log(currentNode.element)
            currentNode = currentNode.next
        }
    }
    //双向链表不需要寻找前一个元素的方法
    // findPrev(item){
    //     let currentNode = this.head
    //     while (currentNode.next && currentNode.next.element !== item){
    //         currentNode = currentNode.next
    //     }
    //     return currentNode
    // }

    //删除一个元素
    remove(item) {
        let currNode = this.find(item)
        currNode.previous.next = currNode.next
        currNode.next.previous = currNode.previous
        currNode.next = null
        currNode.previous = null
    }

    //从前向后寻找最后一个元素
    findLast() {
        let currentNode = this.head
        while (currentNode.next){
            currentNode = currentNode.next
        }
        return currentNode.element
    }

    //反向显示链表元素
    dispReverse() {
        let currentNode = this.findLast()
        console.log(currentNode)
        while (currentNode){
            console.log(currentNode.element)
            currentNode = currentNode.previous
        }
    }
}

let doubleLinkList = new DoubleLinkList()

doubleLinkList.insert('a','head')
doubleLinkList.insert('b','a')
doubleLinkList.insert('c','b')

doubleLinkList.display()
// doubleLinkList.remove('b')
// doubleLinkList.display()

// console.log(doubleLinkList.findLast())
// doubleLinkList.dispReverse()
