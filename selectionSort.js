const MyArray = require('./MyArray.js')
let arr = new MyArray()
function selectionSort() {
    for (let i = 0; i < arr.length; i++) {
        //里层每次循环次数-1，第一次为数组长度-1
        let minIndex = i
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
            console.log(arr)
        }
        arr.swap(arr,i,minIndex)
    }
}

selectionSort()
