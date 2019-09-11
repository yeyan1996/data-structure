/**
 * @description 插入排序
 * 时间复杂度:
 * 最好 O(n)
 * 最坏 O(n^2)
 * 平均 O(n^2)
 * 稳定性:稳定
 **/

const MyArray = require('./MyArray.js')
let arr = new MyArray()
arr = [...arr]

// 定义一个移动数组元素的方法
const move = function (arr, fromIndex, toIndex) {
  const item = arr.splice(fromIndex, 1)[0]
  arr.splice(toIndex, 0, item)
}

function insertSort () {
  // 无限循环，直到j减到0其中如果遇到比当前值大的就向前移动一个位置
  // 当前元素移动的时候只要遇到比它小的元素就立刻退出循环，因为插入排序是从第一个元素开始排序的，之前的元素已经是排序过的状态，不需要在判断了
  for (let i = 1; i < arr.length; i++) {
    // 如果是边界情况则直接退出或者移动到最前面
    /** 使用二分法优化时，必须判断边界情况，否则无法判断插入元素位置**/
    if (arr[i] >= arr[i - 1]) continue
    if (arr[i] <= arr[0]) {
      move(arr, i, 0)
      continue
    }
    let startIndex = 0
    let endIndex = i - 1
    // 使用二分法优化排序,因为插入排序前面的数组都是有序数组所以可以使用二分查找法
    // 必须使用等号，在只剩一个元素时，判断插入在元素左边还是右边
    while (startIndex <= endIndex) {
      const midIndex = Math.floor((startIndex + endIndex) / 2)
      if (arr[i] < arr[midIndex]) {
        endIndex = midIndex - 1
      } else if (arr[i] > arr[midIndex]) {
        startIndex = midIndex + 1
      } else {
        startIndex = midIndex
        break
      }
    }
    move(arr, i, startIndex)
  }
}

insertSort()
console.log(arr)
