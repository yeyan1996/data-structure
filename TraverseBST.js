const BST = require("./BST");
const Queue = require("./Queue.js");

class TraverseBST extends BST {
  // 深度遍历（递归 + 调用栈）
  // 先序遍历
  preOrderRecursive(node) {
    const res = [];
    const _preOrder = function _preOrder(node, res) {
      if (node) {
        res.push(node.data);
        _preOrder(node.left, res);
        _preOrder(node.right, res);
      }
    };
    _preOrder(node, res);
    return res;
  }

  // 中序遍历
  inOrderRecursive(node) {
    const res = [];
    const _inOrder = function _inOrder(node, res) {
      if (node) {
        _inOrder(node.left, res);
        res.push(node.data);
        _inOrder(node.right, res);
      }
    };
    _inOrder(node, res);
    return res;
  }

  // 后序遍历
  postOrderRecursive(node) {
    const res = [];
    const _postOrder = function _postOrder(node, res) {
      if (node) {
        _postOrder(node.left, res);
        _postOrder(node.right, res);
        res.push(node.data);
      }
    };
    _postOrder(node, res);
    return res;
  }

  // 深度遍历（循环 + 模拟调用栈）
  // 先序遍历
  preOrderLoop(node) {
    const stack = [];
    const res = [];
    let cur = node;
    // 当遍历到节点 8 时，需要转换到节点 15
    // 由于此时栈顶的元素即为节点 15
    // 所以加入一些判断，使得能够正确弹出栈顶元素即可
    while (cur || stack.length) {
      while (cur) {
        res.push(cur.data);
        stack.push(cur);
        cur = cur.left;
      }

      // 弹出栈顶元素并将它指向右节点
      // 否则会再次指向左节点导致无限循环
      cur = stack.pop();
      cur = cur.right;
    }

    return res;
  }

  // 中序遍历
  inOrderLoop(node) {
    const stack = [];
    const res = [];
    let cur = node;
    while (cur || stack.length) {
      while (cur) {
        stack.push(cur);
        cur = cur.left;
      }

      cur = stack.pop();
      res.push(cur.data);
      cur = cur.right;
    }
    return res;
  }

  // 后序遍历
  postOrderLoop(node) {
    const stack = [node];
    const res = [];
    while (stack.length) {
      let node = stack.pop();
      res.push(node.data);
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
    return res.reverse();
  }

  // 广度遍历(横向遍历)
  // 原理是借助队列逐层遍历
  breadthTraversal() {
    const res = [];
    const queue = new Queue();
    queue.enqueue(this.root);
    while (!queue.empty()) {
      const item = queue.dequeue();
      res.push(item.data);
      if (item.left) queue.enqueue(item.left);
      if (item.right) queue.enqueue(item.right);
    }
    return res;
  }
}

const bst = new TraverseBST();
const nums = [123, 75, 26, 9, 4, 15, 788, 35, 364, 845, 141, 6, 8];
for (let i = 0; i < nums.length; i++) {
  bst.insert(nums[i]);
}

//             123
//            /   \
//          75    788
//         /      /  \
//        26     364  845
//       /  \   /
//      9   35 141
//     / \
//    4  15
//      \
//       6
//        \
//         8

console.log("先序遍历(调用栈递归):", bst.preOrderRecursive(bst.root));
console.log("中序遍历(调用栈递归):", bst.inOrderRecursive(bst.root));
console.log("后序遍历(调用栈递归):", bst.postOrderRecursive(bst.root));
console.log("广度优先:", bst.breadthTraversal());
console.log("先序遍历（模拟栈递归）:", bst.preOrderLoop(bst.root));
console.log("中序遍历（模拟栈递归）:", bst.inOrderLoop(bst.root));
console.log("后序遍历(模拟栈递归):", bst.postOrderLoop(bst.root));
