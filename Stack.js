class Stack {
  constructor () {
    this.top = 0
    this.dataStore = []
  }

  // 推入一个元素
  push (element) {
    this.dataStore[this.top++] = element
  }

  // 弹出并返回栈顶元素
  pop () {
    return this.dataStore[--this.top]
  }

  // 返回栈顶元素
  peek () {
    return this.dataStore[this.top - 1]
  }

  clear () {
    this.dataStore = []
    this.top = 0
  }

  length () {
    return this.top
  }
}
module.exports = Stack

const stack = new Stack()

stack.push('a')
stack.push('b')
stack.push('c')

console.log(stack)
console.log(stack.peek())
stack.clear()

console.log(stack)

console.log(stack.peek())
