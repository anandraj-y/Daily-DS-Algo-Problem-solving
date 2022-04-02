class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) return undefined;
        if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        } else if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        }
      }
    }
  }

  dfsInorder() {
    const current = this.root;
    const output = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      output.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return output;
  }
}

const node = new BinarySearchTree();
node.insert(10);
node.insert(6);
node.insert(3);
node.insert(8);
node.insert(15);
node.insert(20);

//        10
//      /    \
//     6     15
//    / \      \
//   3   8     20

console.log(node.dfsInorder()); // [3, 6, 8, 10, 15, 20]
