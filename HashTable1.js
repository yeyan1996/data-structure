//散列表(开链法)
class HashTable {
    constructor(length) {
        this.table = new Array(length)
        this.buildChains()
    }

    //散列函数
    betterHash(string) {
        const H = 37
        let total = 0
        for (let i = 0; i < string.length; i++) {
            total += total * H + string.charCodeAt(i)
        }
        return total % this.table.length
    }

    put(key, data) {
        let index = 0
        let pos = this.betterHash(String(key))
        //开链法:如果二维数组(也叫做链)第一个元素有值了就往后推直到找到一个空单元再存储
        while (this.table[pos][index]) {
            index++
        }
        //双数存键名
        this.table[pos][index] = key
        //单数存数据
        this.table[pos][index + 1] = data
    }

    get(key) {
        let index = 0
        let pos = this.betterHash(String(key))
        while (!this.table[pos][index] === key) {
            index++
        }
        return this.table[pos][index + 1]
    }

    showDistro() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i][0]) {
                for (let j = 0; j < this.table[i].length;) {
                    console.log(i + ":" + this.table[i][j+1])
                    j = j + 2
                }
            }
        }
    }

    buildChains() {
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = []
        }
    }
}

let hashTable = new HashTable(137)

hashTable.put(1, "a")
hashTable.put(2, "b")
hashTable.put(2, "b")
hashTable.put("qwe", "c")

hashTable.showDistro()


