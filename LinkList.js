//链表的node类
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkList {
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
    //寻找元素的前一个元素
    findPrev(item){
        let currentNode = this.head
        while (currentNode.next && currentNode.next.element !== item){
            currentNode = currentNode.next
        }
        return currentNode
    }
    //删除一个元素
    remove(item) {
        let prevNode = this.findPrev(item)
        prevNode.next = prevNode.next.next
    }
}

let linkList = new LinkList()

linkList.insert('a','head')
linkList.insert('b','a')
linkList.insert('c','b')

linkList.display()
linkList.remove('b')
linkList.display()

