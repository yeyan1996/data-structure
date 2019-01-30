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
        this.table[pos][index] = data
    }

    get(key){
        let pos = this.betterHash(String(key))
        return this.table[pos]
    }
    showDistro() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i][0]) {
                console.log(i + ":" + this.table[i])
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
console.log(hashTable.get("2333"))

