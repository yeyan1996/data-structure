// 双向链表
// 链表的 node 类
class Node {
  constructor (data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class DoubleLinkList {
  constructor () {
    // 链表头元素
    this.head = null
    this.tail = null
  }

  add (data) {
    const node = new Node(data)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    return this
  }

  find (data) {
    let currentNode = this.head
    while (currentNode.data !== data) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  // 在某个元素后插入一个元素
  findAndInsert (data, targetData) {
    const newNode = new Node(data)
    const currentNode = this.find(targetData)
    // 将新元素的下个元素指向被插入的元素的下个元素
    // 将上个元素指向被插入元素的上个元素
    // currentNode <-> newNode <-> currentNodeNextNode
    newNode.next = currentNode.next
    newNode.prev = currentNode
    currentNode.next.prev = newNode
    currentNode.next = newNode
    return this
  }

  // 展示
  display () {
    const res = []
    let currentNode = this.head
    while (currentNode) {
      res.push(currentNode.data)
      currentNode = currentNode.next
    }
    console.log(res.join(' -> '))
  }

  // 寻找元素的前一个元素
  findPrev (data) {
    let currentNode = this.head
    while (currentNode.next && currentNode.next.data !== data) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  // 删除指定元素
  remove (data) {
    const prevNode = this.findPrev(data)
    // prevNode <-> currentNode <-> currentNodeNextNode
    // 转为
    // prevNode <->  currentNodeNextNode
    prevNode.next = prevNode.next.next
    prevNode.next.prev = prevNode
  }

  // 反转双向链表
  reverse () {
    let current = this.head
    while (current) {
      const nextNode = current.next;
      [current.prev, current.next] = [current.next, current.prev]
      current = nextNode
    }
    [this.head, this.tail] = [this.tail, this.head]
  }
}

const doubleLinkList = new DoubleLinkList()

doubleLinkList.add(1).add(2).add(3)

doubleLinkList
  .findAndInsert('a', 1)
  .findAndInsert('b', 'a')
  .findAndInsert('c', 'b')

doubleLinkList.display()
doubleLinkList.remove('b')
console.log('--------------------')
doubleLinkList.display()
console.log('--------------------')
doubleLinkList.reverse()
doubleLinkList.display()
