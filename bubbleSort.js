const MyArray = require('./MyArray.js')
let arr = new MyArray()
arr.setData(10)
console.log(arr)

function bubbleSort() {
    for (let i = 0; i < arr.length- 1; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] > arr[j]){
                arr.swap(arr,i,j)
            }
        }
    }
}

bubbleSort()
console.log(arr)