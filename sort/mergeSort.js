/**
 * @description 归并排序
 * 时间复杂度:
 * 最好 O(n log n)
 * 最坏 O(n log n)
 * 平均 O(n log n)
 * 空间复杂度: O(n)
 * 稳定性:稳定
 **/


const MyArray = require('./MyArray.js')
let arr = new MyArray()
arr = [...arr] //hack

//归并中的分
function arrSplit(arr) {
    if (arr.length === 1) return arr
    let midIndex = Math.floor(arr.length / 2)
    /**因为被浅拷贝了不会影响到原数组，所以原数组不会被排序**/
    let leftArr = arr.slice(0, midIndex)
    let rightArr = arr.slice(midIndex, arr.length)
    return merge(arrSplit(leftArr), arrSplit(rightArr))
}

//归并中的治
function merge(left, right) {
    let temp = []
    while (right.length && left.length) { //有一方没有元素了就结束排序
        if (left[0] > right[0]) {
            temp.push(right[0])
            right.shift()
        } else {
            temp.push(left[0])
            left.shift()
        }
    }
    //剩下的元素都是比temp大的元素
    return [...temp, ...left, ...right]
}

console.log(arrSplit(arr))

