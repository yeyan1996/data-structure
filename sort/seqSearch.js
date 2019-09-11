// 自组织数据
const arr = [8, 1, 3, 4, 7, 6, 9, 5, 0, 6]

function seqSearch (arr, data) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === data) {
      // 每查找一次目标元素往前移动一位
      if (i > 0) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
      }
    }
  }
}

for (let i = 0; i < 10; i++) {
  seqSearch(arr, 0)
  console.log(arr)
}
