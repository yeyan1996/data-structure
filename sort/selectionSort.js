/**
 * @description 选择排序
 * 时间复杂度:
 * 最好 O(n^2)
 * 最坏 O(n^2)
 * 平均 O(n^2)
 * 稳定性:不稳定
 **/

const MyArray = require('./MyArray.js')
const arr = new MyArray()
function selectionSort () {
  for (let i = 0; i < arr.length; i++) {
    // 里层每次循环次数-1，第一次为数组长度-1
    let minIndex = i
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
      console.log(arr)
    }
    arr.swap(arr, i, minIndex)
  }
}

selectionSort()
