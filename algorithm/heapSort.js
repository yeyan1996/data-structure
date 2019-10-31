/**
 * @description 堆排序
 * 时间复杂度:
 * 最好 O(n log n)
 * 最坏 O(n log n)
 * 平均 O(n log n)
 * 稳定性:不稳定
 * 堆的高度始终小于 log n (n 为元素个数)
 * 堆是一个完全二叉树
 **/

const MyArray = require("./MyArray.js");
const arr = new MyArray();

function swap(arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
}

// index为指针
function adjustHeap(array, index, heapSize) {
  let iMax;
  const iLeft = 2 * index + 1;
  const iRight = 2 * (index + 1);

  iMax = index;

  // 将当前节点和它的2个子节点作比较,返回3个节点中最大的节点
  if (iLeft < heapSize && array[index] < array[iLeft]) {
    iMax = iLeft;
  }
  if (iRight < heapSize && array[iMax] < array[iRight]) {
    iMax = iRight;
  }
  if (iMax !== index) {
    // 将当前节点和较大的子节点交换
    // 递归调用自身，调整当前节点下面的子树
    swap(array, iMax, index);
    adjustHeap(array, iMax, heapSize);
  }
}

// 建堆（最大堆）
function buildMaxHeap(array) {
  // 最后一个非叶子节点开始向前排序
  const iParent = Math.floor(array.length / 2) - 1;

  for (let i = iParent; i >= 0; i--) {
    adjustHeap(array, i, array.length);
  }
}

// 堆排序
function heapSort(array) {
  buildMaxHeap(array);
  console.log(`建堆：${array}`);
  // 堆排序(大根堆)
  for (let i = array.length - 1; i > 0; i--) {
    // 每次排序先将顶部的元素(因为是大根堆所以顶部元素是数组最大的)和根堆尾部(数组尾部)交换
    // 所以大根堆的数组是升序
    swap(array, 0, i);
    // 外层循环每次的i都-1,保证只对未排序的元素进行堆排序
    // 每次排序都将当前堆中最大的元素放到数组最后，并排除对其的调整
    adjustHeap(array, 0, i);
  }
  return array;
}

console.log(`堆排序（大根堆/升序）：${heapSort(arr)}`);
