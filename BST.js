const queue = require("./Queue.js")

class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
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

    //深度遍历
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

    //广度遍历(按树的层数,借助队列数据结构)
    breadthTraversal() {
        queue.enqueue(this.root)
        while (!queue.empty()) {
            let item = queue.dequeue()
            console.log(item.data)
            if (item.left) queue.enqueue(item.left)
            if (item.right) queue.enqueue(item.right)
        }
    }

    //最小/大值(永远在最左/右的叶子节点上)
    getMin(node = this.root) {
        let current = node
        while (current.left) {
            current = current.left
        }
        return current.data
    }

    getMax(node = this.root) {
        let current = node
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
        this.root = this.removeNode(this.root, data)
    }
    removeNode(node, data) {
        if (!node) return null
        if (data > node.data ) {
            node.right = this.removeNode(node.right, data)
            return node
        } else if (data < node.data ) {
            node.left = this.removeNode(node.left, data)
            return node
        } else if (node.data === data) {
            //叶子节点(即没有左子节点又没有右子节点)直接删除
            if (!(node.left || node.right)) {
                return null
            }
            //目标节点没有右节点,直接返回目标节点左子树
            if (node.right === null) {
                return node.left
            }
            //目标节点没有左节点,直接返回目标节点右子树
            if (node.left === null) {
                return node.right
            }
            //如果有左右子节点,则找到左子树最小值/右子树最大值(中序遍历中目标节点的前驱/后继),将目标节点替换为前驱/后继节点,并且删除前驱/后继节点
            if (node.left && node.right) {
                //这里使用后继节点,求右子树的最大值
                let min = this.getMin(node.right)
                let rightNodeTree = this.removeNode(node.right,min)
                node.data = min
                node.right = rightNodeTree
                return node
            }
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

console.log('中序遍历-------------')
bst.inOrder(bst.root)
console.log('先序遍历-------------')
bst.preOrder(bst.root)
console.log('后序遍历-------------')
bst.postOrder(bst.root)
console.log('广度优先-------------')
bst.breadthTraversal()
console.log('find----------')
console.log(bst.find(99))
console.log('remove---------')
bst.remove(45)
bst.inOrder(bst.root)

