class Node{
    constructor(data,left = null,right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
    show() {
        return this.data
    }
}
//二叉查找树
class BST{
    constructor() {
        this.root = null
    }
    insert(data) {
        let node = new Node(data)
        if(this.root){
            this.root = node
        }

    }
}