/**
 * @description 希尔排序
 * 时间复杂度:
 * 最好 O(n log n)
 * 最坏 O(n log n)
 * 平均 O(n log n)
 * 稳定性:不稳定
 **/

const MyArray = require('./MyArray.js')
const arr = new MyArray()

function shellSort () {
  // 计算间隔的算法
  let h = 1
  while (h < arr.length / 3) {
    h = h * 3 + 1
  }

  while (h > 0) { // 每次间隔为 h ,最后一次为正常的插入排序
    for (let j = 0; j < h; j++) { // 外层循环控制下标偏移量
      for (let i = h + j; i < arr.length; i = i + h) { // 内层循环控制每次跳过 h 个元素
        let j = i
        while (j > 0 && arr[j] < arr[j - h]) {
          arr.swap(arr, j, j - h)
          j = j - h
        }
      }
    }
    h = (h - 1) / 3
  }
}

shellSort()
console.log(arr)
