//散列表(线性探测法)
class HashTable {
    constructor(length) {
        this.table = new Array(length)
        this.values = new Array(length)
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
        let pos = this.betterHash(String(key))
        //线性探测法:
        while (this.table[pos]) {
            pos++
        }
        this.table[pos] = key
        this.values[pos] = data
    }

    get(key){
        let pos = this.betterHash(String(key))
        while (this.table[pos] === key){
            pos++
        }
        return this.values[pos]
    }
    showDistro() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i + ":" + this.table[i] + "," + this.values[i])
            }
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

