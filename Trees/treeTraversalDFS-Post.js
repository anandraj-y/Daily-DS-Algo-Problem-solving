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

  dfsPost() {
    const current = this.root;
    const output = [];
    const traversal = (node) => {
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
      output.push(node.val);
    };
    traversal(current);
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

console.log(node.dfsPost()); // [3, 8, 6, 20, 15, 10];
