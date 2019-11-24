class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// 二叉树 binary tree
class BT {
  constructor(arr) {
    this.root = new Node();
    this.createTree(arr);
  }
  createTree(arr) {
    if (!arr.length) return;
    arr = [...arr];
    this.root.val = arr.shift();
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let node = queue.shift();
      if (!node) continue;
      let val;
      val = arr.shift();
      node.left = val == null ? null : new Node(val);

      val = arr.shift();
      node.right = val == null ? null : new Node(val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
}

let bt = new BT([1, 2, 3, null, 4, 5, 6, 7]);
console.log(bt.root);

//             1
//            /  \
//          2     3
//           \   / \
//           4   5  6
//          /
//         7
