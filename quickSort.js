const MyArray = require('./MyArray.js')
let arr = new MyArray()
arr = [...arr] //hack


//创建新数组的快速排序(会占用额外控件)
function quickSort1(arr) {
    if (arr.length < 1) return arr
    let flagIndex = Math.floor(arr.length / 2)
    //需要先把标志元素从数组中拿出来,否则出现多个相同的标记元素会无法排序
    let flag = arr.splice(flagIndex, 1)[0]
    let left = [], right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < flag) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort1(left), flag, ...quickSort1(right)]
}

console.log(quickSort1(arr))


//原地算法的快速排序
function quickSort2(arr, left, right) {
    if (arr.length <= 1) return arr
    //返回一个新的选择点
    let flagIndex = partition(arr, left, right)
    //排序左半边数组
    if (left < flagIndex - 1) quickSort2(arr, left, flagIndex - 1)
    //排序右半边数组(包括选择点元素)
    if (right > flagIndex) quickSort2(arr, flagIndex, right)
    return arr
}

function partition(arr, left, right) {

    //先指定一个选择点保存它的元素值,不能使用动态的flagIndex,否则每次判断都会改变
    const pivot = arr[ Math.floor((left + right) / 2) ];
    // let flagIndex = Math.floor((left + right) / 2)
    while (left <= right) {
        //左哨兵和选择点进行对比,直到找到一个比选择点大的元素为止(找到选择点还没找到会停在选择点)
        while (arr[left] < pivot) {
            left++
        }
        //右哨兵和选择点进行对比,直到找到一个比选择点小的元素为止(找到选择点还没找到会停在选择点)
        while (arr[right] > pivot) {
            right--
        }
        //Todo 研究一下这个为啥加个判断
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }
    return left
}

console.log(quickSort2(arr, 0, arr.length - 1))

