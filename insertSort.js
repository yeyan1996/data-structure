const MyArray = require('./MyArray.js')
let arr = new MyArray()

function insertSort() {
    for (let i = 1; i < arr.length; i++) {
        let j = i
        //无线循环，直到j减到0其中如果遇到比当前值大的就向前移动一个位置
        //当前元素移动的时候只要遇到比它小的元素就立刻退出循环，因为插入排序是从第一个元素开始排序的，之前的元素已经是排序过的状态，不需要在判断了
        while (j > 0 && arr[j] < arr[j - 1]) {
            arr.swap(arr, j, j - 1)
            j--
        }
        console.log(arr)
    }
}


insertSort()


