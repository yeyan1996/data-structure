/**
 * @description 快速排序
 * 时间复杂度:
 * 最好 O(n log n) (顺序数组，每次基数的左边都小于右边，此时就是不断二分)
 * 最坏 O(n^2)
 * 平均 O(n log n)
 * 空间复杂度: O(n log n)
 * 稳定性:不稳定
 **/

const MyArray = require('./MyArray.js')
const arr = new MyArray()

// 创建新数组的快速排序(会占用额外空间)
function quickSort1 (arr) {
  arr = [...arr]
  if (arr.length < 1) return arr
  const flagIndex = Math.floor(arr.length / 2)
  // 需要先把标志元素从数组中拿出来,否则出现多个相同的标记元素会无法排序
  const flag = arr.splice(flagIndex, 1)[0]
  const left = []; const right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < flag) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort1(left), flag, ...quickSort1(right)]
}

console.log('非原地算法', quickSort1(arr))

// 原地算法的快速排序(https://humanwhocodes.com/blog/2012/11/27/computer-science-in-javascript-quicksort/)
function quickSort2 (arr, left, right) {
  // 当左右都是同一个元素时直接返回，防止爆栈
  if (right - left === 0) return
  // 返回一个新的标志点
  const flagIndex = partition(arr, left, right)
  // 排序左半边数组
  quickSort2(arr, left, flagIndex - 1)
  // 排序右半边数组(包括标志点元素)
  quickSort2(arr, flagIndex, right)
  return arr
}

function partition (arr, left, right) {
  // left/right为左右指针
  // 指定当前排序的标志点,不能使用动态的flagIndex,否则每次判断都会改变
  // 选择数组的中间值作为基准点，不推荐使用数组第一个值，详情见上面描述
  const index = Math.floor((left + right) / 2)
  const pivot = arr[index]

  // 当右指针小于左指针退出while循环
  while (left <= right) {
    // 左指针和标志点进行对比,直到找到一个大于等于标志点的元素
    // 和标志点相等的元素也要停下
    while (arr[left] < pivot) {
      left++
    }
    // 右指针和标志点进行对比,直到找到一个小于等于标志点的元素
    // 和标志点相等的元素也要停下
    while (arr[right] > pivot) {
      right--
    }
    // 确保右指针大于左指针的时候才交换元素,保证右边的值比左边的大
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      // 交换后左右指针继续前进/后退一格
      left++
      right--
    }
  }
  // 返回当前轮排序结束的标志点(left左边数组比left对应元素都小,右边的数组比left对应的元素都大)
  return left
}

console.log('原地算法', quickSort2(arr, 0, arr.length - 1))
