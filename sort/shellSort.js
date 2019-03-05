
const MyArray = require('./MyArray.js')
let arr = new MyArray()

//希尔排序
function shellSort() {
    //计算间隔的算法
    let h = 1
    while (h < arr.length / 3) {
        h = h * 3 + 1
    }

    while (h > 0) {
        //每次间隔为h,最后一次为正常的插入排序
        for (let i = h; i < arr.length; i = i + h) {
            let j = i
            while (j > 0 && arr[j] < arr[j - h]) {
                arr.swap(arr, j, j - h)
                j = j - h
            }
        }
        h = (h - 1) / 3
    }
}

shellSort()
console.log(arr)
