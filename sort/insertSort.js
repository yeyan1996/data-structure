const MyArray = require('./MyArray.js')
let arr = new MyArray()
arr = [...arr]

//定义一个移动数组元素的方法
const move = function (arr,fromIndex,toIndex) {
  let item =  arr.splice(fromIndex,1)[0]
    arr.splice(toIndex,0,item)
}

function insertSort() {
    //无限循环，直到j减到0其中如果遇到比当前值大的就向前移动一个位置
    //当前元素移动的时候只要遇到比它小的元素就立刻退出循环，因为插入排序是从第一个元素开始排序的，之前的元素已经是排序过的状态，不需要在判断了
    for (let i = 1; i < arr.length; i++) {
        let j = i
        //如果是边界情况则直接退出或者移动到最前面
        if (arr[j] >= arr[j - 1] ) continue;
        if( arr[j] <= arr[0]) {
            move(arr,j,0)
            continue;
        }
        let start = 0
        let end = j - 1
        //使用二分法优化排序,因为插入排序前面的数组都是有序数组所以可以使用二分查找法
        while (start < end) {
            let mid = Math.floor((start + end) / 2)
            if (arr[j] < arr[mid]) {
                end = mid
                if (start === end - 1) break;
            } else if (arr[j] > arr[mid]) {
                start = mid
                if (start + 1 === end) break;
            } else {
                start = mid
                break
            }
        }
        move(arr,j,start+1)
    }
}

insertSort()
console.log(arr)



