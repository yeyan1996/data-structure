// Set集合
class Set {
  constructor() {
    this.dataStore = [];
  }

  add(data) {
    if (this.dataStore.indexOf(data) < 0) {
      this.dataStore.push(data);
      return true;
    }
    return false;
  }

  remove(data) {
    const pos = this.dataStore.indexOf(data);
    if (pos > 0) {
      this.dataStore.splice(pos, 1);
      return true;
    }
    return false;
  }

  size() {
    return this.dataStore.length;
  }

  show() {
    return this.dataStore;
  }

  // 判断参数是否在集合中
  contains(data) {
    return this.dataStore.indexOf(data) > 0;
  }

  // 并集
  union(set) {
    const tempSet = new Set();
    for (let i = 0; i < this.dataStore.length; i++) {
      tempSet.add(this.dataStore[i]);
    }
    for (let i = 0; i < set.dataStore.length; i++) {
      if (!tempSet.contains(set.dataStore[i])) {
        tempSet.add(set.dataStore[i]);
      }
    }
    return tempSet;
  }

  // 交集
  intersect(set) {
    const tempSet = new Set();
    for (let i = 0; i < this.dataStore.length; i++) {
      if (set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i]);
      }
    }
    return tempSet;
  }

  // 是否为传入参数的子集
  subset(set) {
    if (this.size() > set.size()) {
      return false;
    }
    for (let i = 0; i < this.dataStore.length; i++) {
      if (!set.contains(this.dataStore[i])) {
        return false;
      }
    }
    return true;
  }

  // 补集(存在当前set实例的集合中,但不存在传入参数的集合中的元素)
  difference(set) {
    const tempSet = new Set();
    for (let i = 0; i < this.dataStore.length; i++) {
      if (!set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i]);
      }
    }
    return tempSet;
  }
}

console.log(new Set());
