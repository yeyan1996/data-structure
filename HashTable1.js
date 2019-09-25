// 哈希表(开链法)
class HashTable {
  constructor() {
    // 为了让哈希算法减少冲突，没有指定 table 长度
    this.table = [];
  }

  // 哈希函数
  computeHash(value) {
    value = String(value);
    const SEED = 37;
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
      hash += hash * SEED + value.charCodeAt(i);
    }
    return hash;
  }

  add(value) {
    const index = this.computeHash(value);
    // 开链法:如果二维数组第一个元素有值了就存储到下个元素
    if (Array.isArray(this.table[index])) {
      this.table[index].push(value);
    } else if (this.table[index]) {
      this.table[index] = [this.table[index], value];
    } else {
      this.table[index] = value;
    }
    return this;
  }

  remove(value) {
    const index = this.computeHash(value);
    if (Array.isArray(this.table[index])) {
      const innerIndex = this.table[index].findIndex(item => item === value);
      innerIndex > -1 && this.table[index].splice(innerIndex, 1);
    } else if (this.table[index]) {
      this.table[index] = undefined;
    }
  }

  // 哈希表不需要获取某个元素，只需要知道元素是否存在于哈希表中
  contains(value) {
    const index = this.computeHash(value);
    if (this.table[index] === value) {
      return true;
    }
    if (Array.isArray(this.table[index])) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i] === value) return true;
      }
    }
    return false;
  }

  display() {
    let flag = false;
    this.table.forEach((item, index) => {
      if (item) {
        console.log(`${index}: ${item}`);
        flag = true;
      }
    });
    !flag && console.log("hashTable 为空");
  }
}

const hashTable = new HashTable();

hashTable
  .add("a")
  .add("a")
  .add("b")
  .add("d")
  .add(123);

console.log(hashTable.contains("a"));
console.log("--------------");
hashTable.display();
hashTable.remove(123);
console.log("--------------");
hashTable.display();
