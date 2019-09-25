/**
 * @description 二分查找
 * 时间复杂度:
 * 最好 O(1)
 * 最坏 O(log n)
 **/

const arr = [1, 2, 3, 4, 4, 4, 4, 4, 4, 5, 6, 7, 8, 9];

// 循环版本
function binSearchLoop(arr, data, start, end) {
  while (start <= end) {
    const midIndex = Math.floor((start + end) / 2);
    const mid = arr[midIndex];
    if (data > mid) {
      // 去除了中间的情况所以+1
      start = midIndex + 1;
    } else if (data < mid) {
      end = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  // 找不到返回-1
  return -1;
}

// 递归版本
function binSearchRecursive(arr, data, start, end) {
  if (start > end) {
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] < data) {
    return binSearchRecursive(arr, data, mid + 1, end);
  } else if (arr[mid] > data) {
    return binSearchRecursive(arr, data, start, mid - 1);
  } else if (arr[mid] === data) {
    return mid;
  }
}

console.log(binSearchLoop(arr, 9, 0, arr.length - 1));
console.log(binSearchRecursive(arr, 9, 0, arr.length - 1));

// 查找数组中某个元素出现次数
function count(arr, data) {
  let count = 0;
  const pos = binSearchLoop(arr, data, 0, arr.length - 1);
  if (pos > 0) {
    count++;
  }
  for (let i = pos - 1; i > 0; i--) {
    if (arr[i] === data) {
      count++;
      // 因为是是排序后的数组,一旦不等于下个元素就直接退出查找
    } else {
      break;
    }
  }
  for (let i = pos + 1; i < arr.length; i++) {
    if (arr[i] === data) {
      count++;
    } else {
      break;
    }
  }
  return count;
}

console.log(count(arr, 4));

// 查找数组中第一个目标元素下标
function firstIndex(arr, data) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const midIndex = Math.floor((start + end) / 2);
    const mid = arr[midIndex];
    if (data > mid) {
      start = midIndex + 1;
    } else if (data < mid) {
      end = midIndex - 1;
    } else {
      // 当前一个元素不是目标元素时
      // 说明当前元素即使目标元素也是第一个目标元素
      if (midIndex === arr.length - 1 || arr[midIndex - 1] !== data) {
        return midIndex;
      } else {
        // 否则继续循环
        end = midIndex - 1;
      }
    }
  }
  // 找不到返回-1
  return -1;
}

console.log(firstIndex(arr, 4));
