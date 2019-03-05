//二分查找
let arr = [1, 2, 3, 4, 4, 4, 4, 4, 4, 5, 6, 7, 8, 9]

function binSearch(arr, data) {
    let startIndex = 0
    let endIndex = arr.length - 1
    while (startIndex <= endIndex) {
        let midIndex = Math.floor((startIndex + endIndex) / 2)
        let mid = arr[midIndex]
        if (data > mid) {
            //去除了中间的情况所以+1
            startIndex = midIndex + 1
        } else if (data < mid) {
            endIndex = midIndex - 1
        } else {
            return midIndex
        }
    }
    //找不到返回-1
    return -1
}

console.log(binSearch(arr, 9))

//查找数组中某个元素出现次数
function count(arr, data) {
    let count = 0
    let pos = binSearch(arr, data)
    if (pos > 0) {
        count++
    }
    for (let i = pos - 1; i > 0; i--) {
        if (arr[i] === data) {
            count++
            //因为是是排序后的数组,一旦不等于下个元素就直接退出查找
        } else {
            break
        }
    }
    for (let i = pos + 1; i < arr.length; i++) {
        if (arr[i] === data) {
            count++
        } else {
            break
        }
    }
    return count
}

console.log(count(arr, 4))
