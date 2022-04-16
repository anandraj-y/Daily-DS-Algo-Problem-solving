class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  getParentIndex = (index) => {
    return Math.floor((index - 1) / 2);
  };

  bubbleUp = () => {
    let index = this.values.length - 1;
    let temp;
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.values[index].priority >= this.values[parentIndex].priority)
        break;
      temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      index = parentIndex;
    }
  };

  enqueue = (val, priority) => {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
    return this.values;
  };

  sinkDown = () => {
    let temp;
    const length = this.values.length;
    let swap = null;
    let root = 0;
    let left, right;
    while (true) {
      left = 2 * root + 1;
      right = 2 * root + 2;
      if (left < length) {
        if (this.values[root].priority > this.values[left].priority) {
          swap = left;
        }
      }
      if (right < length) {
        if (
          (swap && this.values[right].priority < this.values[left].priority) ||
          (!swap && this.values[right].priority < this.values[root].priority)
        ) {
          swap = right;
        }
      }
      if (swap === null) break;
      temp = this.values[root];
      this.values[root] = this.values[swap];
      this.values[swap] = temp;
      root = swap;
      swap = null;
    }
  };
  dequeue = () => {
    const firstVal = this.values.shift();
    const lastVal = this.values.pop();
    lastVal && this.values.unshift(lastVal);
    this.sinkDown();
    return firstVal;
  };
}

export default PriorityQueue;
