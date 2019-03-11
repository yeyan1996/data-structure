module.exports = class MyArray extends Array{
    constructor() {
        super()
        this.setData(10)
        console.log('init Array',this)
    }

    setData(size) {
        for (let i = 0; i < size; i++) {
            this[i] = Math.floor(Math.random() * (size + 1))
        }
    }

    swap(arr, index1, index2) {
        [arr[index1],arr[index2]] = [arr[index2],arr[index1]]
    }
}
