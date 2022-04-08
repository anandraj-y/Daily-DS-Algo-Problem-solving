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
        return Math.floor((index - 1) / 2)
    }
    
    bubbleUp = () => {
        let index = this.values.length - 1;
        let temp;
        while(index > 0) {
            let parentIndex = this.getParentIndex(index)
            if(this.values[index].priority >= this.values[parentIndex].priority) break;
            temp = this.values[index];
            this.values[index] = this.values[parentIndex];
            this.values[parentIndex] = temp;
            index = parentIndex;
        }
    }
    
    enqueue = (val, priority) => {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
        return this.values;
    }

    sinkDown = () => {
        let temp;
        const length = this.values.length;
        let swap = null;
        let root = 0;
        let left, right;
        while(true) {
            left =  2*root + 1;
            right = 2*root + 2;
            if(left < length) {
                if(this.values[root].priority > this.values[left].priority) {
                    swap = left
                }
            }
            if(right < length) {
                if(
                    swap && this.values[right].priority < this.values[left].priority || 
                    !swap && this.values[right].priority < this.values[root].priority
                ) {
                    swap = right;
                }
            }
            if(swap === null) break;
            temp = this.values[root];
            this.values[root] = this.values[swap];
            this.values[swap] = temp;
            root = swap;
            swap = null;
        }
        
    }
    //  6
    // 7  3
    dequeue = () => {
        const firstVal = this.values.shift();
        const lastVal = this.values.pop();
        lastVal && this.values.unshift(lastVal);
        this.sinkDown();
        return firstVal;
    }
    
}

let pqueue = new PriorityQueue();
pqueue.enqueue(1, 16);
pqueue.enqueue(1, 12);
pqueue.enqueue(1, 11);
pqueue.enqueue(1, 55);
pqueue.enqueue(1, 45);
pqueue.enqueue(1, 33);
pqueue.enqueue(1, 18);
pqueue.enqueue(1, 5);
pqueue.enqueue(1, 1);
pqueue.enqueue(1, 3);
pqueue.enqueue(1, 22);
pqueue.enqueue(1, 17);

