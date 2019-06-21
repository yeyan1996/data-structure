/**
 * @description 堆排序
 * 时间复杂度:
 * 最好 O(n log n)
 * 最坏 O(n log n)
 * 平均 O(n log n)
 * 稳定性:不稳定
 * 堆的高度始终小于 log n (n 为元素个数)
 * 堆是一个完全二叉树
 **/


const MyArray = require('./MyArray.js')
let arr = new MyArray()

function swap(arr, left, right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
}

//index为指针
function maxHeapify(array, index, heapSize) {
    let iMax, iLeft, iRight;
    while (true) {
        iMax = index;
        iLeft = 2 * index + 1;
        iRight = 2 * (index + 1);

        //将当前节点和它的2个子节点作比较,返回3个节点中最大的节点
        if (iLeft < heapSize && array[index] < array[iLeft]) {
            iMax = iLeft;
        }
        if (iRight < heapSize && array[iMax] < array[iRight]) {
            iMax = iRight;
        }
        if (iMax !== index) {
            //将指针指向较大的子节点,并且将当前节点和较大的子节点交换
            swap(array, iMax, index);
            index = iMax;
        } else {
            //如果最大的是当前节点,代表不需要再往下排序(因为排序的数组满足大根堆)
            break;
        }
    }
}

function buildMaxHeap(array) {
    let iParent = Math.floor(array.length / 2) - 1;

    for (let i = iParent; i >= 0; i--) {
        maxHeapify(array, i, array.length);
    }
}

function heapSort(array) {
    buildMaxHeap(array);
    console.log(`建堆：${array}`)
    //堆排序(大根堆)
    for (let i = array.length - 1; i > 0; i--) {
        //每次排序先将顶部的元素(因为是大根堆所以顶部元素是数组最大的)和根堆尾部(数组尾部)交换
        swap(array, 0, i);
        //外层循环每次的i都-1,保证只对未排序的元素进行堆排序
        //每次排序都将最大的元素放到数组最后
        maxHeapify(array, 0, i);
    }
    return array;
}

console.log(`大根堆：${heapSort(arr)}`)
