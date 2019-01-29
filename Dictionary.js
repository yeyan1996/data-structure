class Dictionary {
    constructor() {
        //字典为数组，因为需要有排序功能
        this.dataStore = []
    }
    add(key,value) {
        this.dataStore[key] = value
    }
    find(key) {
        return this.dataStore[key]
    }
    remove(key){
        delete this.dataStore[key]
    }
    //为字典排序
    showAll() {
        Object.keys(this.dataStore).sort().forEach(key=>{
            console.log(key,this.dataStore[key])
        })
    }
    count() {
        return Object.keys(this.dataStore).length
    }
    clear() {
        Object.keys(this.dataStore).forEach(key=>{
            delete this.dataStore[key]
        })
    }
}

let dictionary = new Dictionary()

dictionary.add('name','zhl')
dictionary.add('age',22)
dictionary.add('sex','male')
console.log(dictionary.find('name'))
dictionary.showAll()
console.log(dictionary.count())
console.log('---------')
dictionary.clear()
dictionary.showAll()