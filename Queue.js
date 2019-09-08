class Queue {
    constructor() {
        this.dataStore = []
    }

    //队尾插入一个元素
    enqueue(item) {
        this.dataStore.push(item)
    }

    //队首删除一个元素
    dequeue() {
        return this.dataStore.shift()
    }

    //队首的元素
    front() {
        return this.dataStore[0]
    }

    //队尾的元素
    back() {
        return this.dataStore[this.dataStore.length - 1]
    }

    //返回队列
    toString() {
        return this.dataStore
    }

    //清空
    empty() {
        return this.dataStore.length === 0
    }
}


module.exports = Queue
