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

    // 深度遍历
    // 中序遍历(二叉查找树的中序遍历返回的是一个顺序数组)
    inOrder(node) {
        let res = []
        const _inOrder = function _inOrder(node,res) {
            if (node) {
                _inOrder(node.left,res)
                res.push(node.data)
                _inOrder(node.right,res)
            }
        }
        _inOrder(node,res)
        return res
    }

    // 先序遍历
    preOrder(node) {
        let res = []
        const _preOrder = function _preOrder(node,res) {
            if (node) {
                res.push(node.data)
                _preOrder(node.left,res)
                _preOrder(node.right,res)
            }
        }
        _preOrder(node,res)
        return res
    }

    // 后序遍历
    postOrder(node) {
        let res = []
        const _postOrder = function _postOrder(node,res) {
            if (node) {
                _postOrder(node.left,res)
                _postOrder(node.right,res)
                res.push(node.data)
            }
        }
        _postOrder(node,res)
        return res
    }

    //广度遍历(按树的层数,借助队列数据结构)
    breadthTraversal() {
        let res = []
        queue.enqueue(this.root)
        while (!queue.empty()) {
            let item = queue.dequeue()
            res.push(item.data)
            if (item.left) queue.enqueue(item.left)
            if (item.right) queue.enqueue(item.right)
        }
        return res
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
            /**通过递归调用，重新构建二叉查找树，建立父子关系**/
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
                //这里使用后继节点,求右子树的最小值
                let min = this.getMin(node.right)
                let rightNodeTree = this.removeNode(node.right,min)
                node.data = min
                node.right = rightNodeTree
                return node
            }
        }
    }

    // 翻转二叉树
    reverseTree(current = this.root) {
            if(!current) return
            this.reverseTree(current.left)
            this.reverseTree(current.right)
            this.reverseNode(current)
    }

    reverseNode(node) {
        [node.left,node.right] = [node.right,node.left]
    }
}

let bst = new BST()
let nums = [123,75,26,9,4,15,788,35,364,845,141,6,8];
for(let i = 0; i < nums.length; i++) {
    bst.insert(nums[i]);
}

//             123
//            /   \
//          75    788
//         /      /  \
//        26     364  845
//       /  \   /
//      9   35 141
//     /
//    4
//      \
//       6
//      /
//     8

console.log('中序遍历:',bst.inOrder(bst.root))
console.log('先序遍历:',bst.preOrder(bst.root))
console.log('后序遍历:',bst.postOrder(bst.root))
console.log('广度优先:',bst.breadthTraversal())
console.log('find 33:',bst.find(35))
bst.remove(141)
console.log('remove 141:',bst.inOrder(bst.root))
bst.reverseTree()
console.log('中序遍历:',bst.inOrder(bst.root))
