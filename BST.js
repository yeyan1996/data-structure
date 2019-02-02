class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }

    show() {
        return this.data
    }
}

//二叉查找树
class BST {
    constructor() {
        this.root = null
    }

    //插入节点
    insert(data) {
        let node = new Node(data)
        if (this.root == null) {
            this.root = node
            return
        }
        let current = this.root
        let parent
        while (true) {
            parent = current
            if (data < current.data) {
                current = current.left
                if (current == null) {
                    parent.left = node
                    break;
                }
            } else {
                current = current.right
                if (current == null) {
                    parent.right = node
                    break;
                }
            }
        }
    }

    //中序遍历
    inOrder(node) {
        if (node) {
            this.inOrder(node.left)
            console.log(node.data)
            this.inOrder(node.right)
        }
    }

    //先序遍历
    preOrder(node) {
        if (node) {
            console.log(node.data)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }

    //后序遍历
    postOrder(node) {
        if (node) {
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.data)
        }
    }

    //最小/大值
    getMin() {
        let current = this.root
        while (current.left) {
            current = current.left
        }
        return current.data
    }

    getMax() {
        let current = this.root
        while (current.right) {
            current = current.right
        }
        return current.data
    }

    //查找给定值
    find(data) {
        let current = this.root
        while (current) {
            if (current.data === data) {
                return current
            } else if (current.data > data) {
                current = current.left
            } else {
                current = current.right
            }
        }
        return null
    }
    //删除二叉树节点
    remove(data) {
        let node = this.find(data)
        node = this.removeNode(node)
    }

    removeNode(data) {
        //叶子节点直接返回null
        if (!(node.left || node.right)) {
            return null
        }
        //如果有左右子节点,则找到左子树最小值/右子书最大值
        if (node.left && node.right) {

        }
        if (node.left) {

        }
        if (node.right) {

        }

    }
}


let bst = new BST()

bst.insert(23)
bst.insert(45)
bst.insert(16)
bst.insert(37)
bst.insert(3)
bst.insert(99)
bst.insert(55)

bst.inOrder(bst.root)
// bst.preOrder(bst.root)
// bst.postOrder(bst.root)
console.log(bst.find(99))


