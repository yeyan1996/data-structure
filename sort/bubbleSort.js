/**
 * @description 冒泡排序
 * 时间复杂度:
 * 最好 O(n)  (优化后)
 * 最坏 O(n^2)
 * 平均 O(n^2)
 * 稳定性:稳定
 **/

const MyArray = require('./MyArray.js')
const arr = new MyArray()

function bubbleSort () {
  // 优化了冒泡排序算法
  let swapedFlag
  for (let i = arr.length - 1; i >= 0; i--) {
    swapedFlag = false
    // 里层每次循环次数-1，第一次为数组长度-1
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 如果内层排序时所有的数字都没有交换,表示已经是一个有序数组,直接退出排序
        swapedFlag = true
        arr.swap(arr, j, j + 1)
      }
    }
    // 已经是有序数组时,直接退出排序防止不必要的循环
    if (!swapedFlag) break
  }
}

bubbleSort()
console.log(arr)
