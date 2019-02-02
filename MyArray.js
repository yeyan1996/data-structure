module.exports = class MyArray extends Array{
    constructor() {
        super()
    }

    setData(size) {
        for (let i = 0; i < size; i++) {
            this[i] = Math.floor(Math.random() * (size + 1))
        }
    }

    swap(arr, index1, index2) {
        let temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
    }

}
