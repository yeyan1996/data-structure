// 哈希表(线性探测法)
// 需要保证数组长度足够大
class HashTable {
    constructor() {
        this.table = []
    }

    //哈希函数
    computeHash(value) {
        value = String(value)
        const SEED = 37
        let hash = 0
        for (let i = 0; i < value.length; i++) {
            hash += hash * SEED + value.charCodeAt(i)
        }
        return hash
    }

    add(value) {
        let index = this.computeHash(value)
        //线性探测法:
        while (this.table[index]) {
            index++
        }
        this.table[index] = value
        return this
    }

    // 哈希表不需要获取某个元素，只需要知道元素是否存在于哈希表中
    contains(value) {
        let index = this.computeHash(value)
        for (let i = index; i < this.table.length; i++) {
            if (this.table[index] === value) return true
        }
        return false
    }

    remove(value) {
        let index = this.computeHash(value)
        for (let i = index; i < this.table.length; i++) {
            if (this.table[index] === value) {
                delete this.table[index]
            }
        }
    }

    display() {
        let flag = false
        this.table.forEach((item, index) => {
            if(item) {
                console.log(`${index}: ${item}`)
                flag = true
            }
        })
        !flag && console.log('hashTable 为空')
    }

}

let hashTable = new HashTable()

hashTable.add("a")
    .add("a")
    .add("b")
    .add("d")
    .add(123)

console.log(hashTable.contains("a"))
console.log('--------------')
hashTable.display()
hashTable.remove(123)
console.log('--------------')
hashTable.display()


