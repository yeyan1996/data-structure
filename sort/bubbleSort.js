const MyArray = require('./MyArray.js')
let arr = new MyArray()

function bubbleSort() {
    for (let i = arr.length - 1; i >= 0; i--) {
        //里层每次循环次数-1，第一次为数组长度-1
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                arr.swap(arr, j, j + 1)
            }
            console.log(arr)
        }
    }
}

bubbleSort()
