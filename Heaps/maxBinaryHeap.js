class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    bubbleUp = () => {
        let index = this.values.length - 1;
        let parentIndex = this.getParentIndex(index);
        let temp;
        while(this.values[parentIndex] < this.values[index]) {
            temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[index];
            this.values[index] = temp;
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
    }

    // utility fn to get parent
    getParentIndex = (index) => {
        return Math.floor((index - 1)/ 2)
    }

    // utility fn to get child indexes
    getChildIndexes = rootIndex => {
        const left = (2 * rootIndex) + 1;
        const right = (2 * rootIndex) + 2;
        return {
            left,
            right
        }
    }
    
    insert(val) {
        this.values.push(val);
        this.bubbleUp();
        return this.values;
    }

    sinkDown = () => {
        let root = 0;
        let temp;
        let swap = null;
        while(true) {
            let {left, right} = this.getChildIndexes(root);
            if(left && this.values[root] < this.values[left]) {
                swap = left;
            }
            if(right && this.values[root] < this.values[right] && this.values[right] > this.values[left]) {
                swap = right;
            }
            if(swap === null) break;
            temp = this.values[root];
            this.values[root] = this.values[swap];
            this.values[swap] = temp;
            root = swap;
            swap = null;
        }
    }
    
    extractMax = () => {
        let poppedVal = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values[this.values.length - 1] =  poppedVal;
        this.sinkDown();
        return poppedVal;
    }
}

const maxheap = new MaxBinaryHeap();
