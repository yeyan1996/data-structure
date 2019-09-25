class List {
  constructor() {
    this.dataStore = [];
    this.pos = 0;
    this.listSize = 0;
  }

  // 清空列表
  clear() {
    this.dataStore.length = 0;
    this.pos = 0;
    this.listSize = 0;
  }

  // 寻找某个元素对应下标
  find(item) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === item) {
        return i;
      }
    }
    return -1;
  }

  // 添加一个元素
  append(item) {
    this.dataStore[this.listSize++] = item;
  }

  // 删除某个元素
  remove(item) {
    const index = this.find(item);
    if (index > 0) {
      this.dataStore.splice(index, 1);
      this.listSize--;
    } else {
      return false;
    }
  }

  // 返回列表长度
  length() {
    return this.listSize;
  }

  // 返回所有元素
  toString() {
    return this.dataStore;
  }

  // 插入元素到指定位置
  insert(item, after) {
    const index = this.dataStore.find(after);
    if (index > 0) {
      this.dataStore.splice(index, 1, item);
      this.listSize++;
      return true;
    }
    throw new Error("没有该元素");
  }

  // 查看某个元素是否在列表中(返回true/false)
  contains(item) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === item) {
        return true;
      }
    }
    return false;
  }

  // 将position置为0
  front() {
    this.pos = 0;
  }

  // 将position置为列表最后一个元素
  end() {
    this.pos = this.listSize - 1;
  }

  // 将position向前移一位
  prev() {
    this.pos--;
  }

  // 将position向后移一位
  next() {
    if (this.pos < this.listSize) {
      this.pos++;
    }
  }

  // 返回当前position
  currPos() {
    return this.pos;
  }

  // 返回当前position对应的元素
  getElement() {
    return this.dataStore[this.pos];
  }

  // 判断是否还有下个元素
  hasNext() {
    return this.pos < this.dataStore.length;
  }

  // 判断是否还有上个元素
  hasPrev() {
    return this.pos > 0;
  }
}

console.log(new List());
