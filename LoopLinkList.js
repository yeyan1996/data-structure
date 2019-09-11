// 链表的node类
class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

class LoopLinkList {
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
      this.tail.next = this.head
    } else {
      this.tail.next = node
      this.tail = node
      node.next = this.head
    }
    return this
  }

  find (data) {
    let currentNode = this.head
    while (currentNode.data !== data) {
      currentNode = currentNode.next
      if (currentNode === this.head) break
    }
    return currentNode
  }

  // 在某个元素后插入一个元素
  findAndInsert (data, item) {
    const newNode = new Node(data)
    const currentNode = this.find(item)
    // 将新元素的下个元素指向被插入的元素的下个元素
    // currentNode -> newNode -> currentNodeNextNode
    newNode.next = currentNode.next
    currentNode.next = newNode
    return this
  }

  // 寻找元素的前一个元素
  findPrev (data) {
    let currentNode = this.head
    while (currentNode.next && currentNode.next.data !== data) {
      currentNode = currentNode.next
      if (currentNode === this.head) break
    }
    return currentNode
  }

  // 删除指定元素
  remove (data) {
    const prevNode = this.findPrev(data)
    // prevNode -> currentNode -> currentNodeNextNode
    // 转为
    // prevNode ->  currentNodeNextNode
    prevNode.next = prevNode.next.next
  }

  // 反转循环链表
  reverse () {
    let prevNode = this.head
    let current = prevNode.next
    let nextNode
    while (current) {
      nextNode = current.next
      current.next = prevNode
      if (current === this.head) break
      prevNode = current
      current = nextNode
    }
    [this.head, this.tail] = [this.tail, this.head]
    this.tail.next = this.head
  }

  // 展示
  display () {
    const res = []
    let currentNode = this.head
    while (currentNode) {
      res.push(currentNode.data)
      currentNode = currentNode.next
      if (currentNode === this.head) {
        res.push('loop.......')
        break
      }
    }
    console.log(res.join(' -> '))
  }
}

const loopLinkList = new LoopLinkList()

loopLinkList.add(1).add(2).add(3)

loopLinkList
  .findAndInsert('a', 1)
  .findAndInsert('b', 'a')
  .findAndInsert('c', 'b')

loopLinkList.display()
loopLinkList.remove('b')
console.log('--------------------')
loopLinkList.display()
console.log('--------------------')
loopLinkList.reverse()
console.log(loopLinkList)
loopLinkList.display()
