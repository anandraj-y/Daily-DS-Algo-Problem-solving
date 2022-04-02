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

  dfsPre() {
    const output = [];
    function pushNodes(node) {
      output.push(node.val);
      if (node.left) pushNodes(node.left, output);
      if (node.right) pushNodes(node.right, output);
    }
    pushNodes(this.root);
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

console.log(node.dfsPre()); // [10, 6, 8, 3, 15, 20];
