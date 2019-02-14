// const MyArray = require('./MyArray.js')
// let arr = new MyArray()
// arr = [...arr] //hack
arr = [59, 25, 71, 16, 62, 84, 34, 45]

//创建新数组的快速排序(会占用额外控件)
function quickSort1(arr) {
    arr = [...arr]
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
    //如果左边的元素超过1个则排序左半边数组
    if (left < flagIndex - 1) quickSort2(arr, left, flagIndex - 1)
    //如果右边的元素超过1个则排序右半边数组(包括选择点元素)
    if (right > flagIndex) quickSort2(arr, flagIndex, right)
    return arr
}

function partition(arr, left, right) {

    //先指定一个选择点保存它的元素值,不能使用动态的flagIndex,否则每次判断都会改变

    //根据left/right参数设置一个随机下标点
    let randomIndex = parseInt(Math.random() * (right - left + 1)) + left
    const pivot = arr[randomIndex];

    while (left <= right) {
        //左哨兵和选择点进行对比,直到找到一个比选择点大的元素为止(找到选择点还没找到会停在选择点)
        while (arr[left] < pivot) {
            left++
        }
        //右哨兵和选择点进行对比,直到找到一个比选择点小的元素为止(找到选择点还没找到会停在选择点)
        while (arr[right] > pivot) {
            right--
        }
        //防止目标元素是整个元素最小的导致right的位置变成-1(这种情况则不会交换元素)
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }
    return left
}

console.log(quickSort2(arr, 0, arr.length - 1))

