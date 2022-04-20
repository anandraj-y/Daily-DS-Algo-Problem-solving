class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    
    push(val) {
            let newNode = new Node(val);
            if(!this.head) {
               this.head = newNode;
               this.tail = newNode;
            }  else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
            this.tail = current.next; 
          }
        this.length += 1;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next; 
        }
        return this;
    }

    insertAt(index, val) {
        if(typeof index !== 'number') return false;
        if(index < 0 || index > this.length) return false;
        if(index === 0) {
            this.unshift(val);
            return true;
        }
        if(index === this.length) {
            this.push(val);
            return true;
        }
        const prevNode = this.getIdx(index - 1);
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }
    
    printValues() {
        let current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }
    
    deleteVal(val) {
        let current = this.head;
        let prev;
        while(current.next !== null) {
            if(current.val === val) {
                prev.next = current.next;
                return current;
            }
            prev = current;
            current = current.next;
            this.length -=1;
        }
    }

    unshift(val){
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
             this.head = newNode;
        }
        this.length += 1;
        return this;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) {
            return this.shift();
        }
        if(index === this.length - 1) {
            return this.pop();
        }
        let prev = this.getIdx(index - 1);
        let current = prev.next;
        prev.next = current.next;
        this.length--;
        return current;
    }

    shift() {
        if(this.length === 0) return false;
        const deletedNode = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
        } else {
            const temp = this.head.next;
            this.head = temp;
            this.length--;
        }
        return deletedNode
    }
    
    pop() {
        let current = this.head;
        let prev = current;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return this;
        }
        while(current.next !== null) {
            prev = current;
            current = current.next;
        }
        const deleted = prev;
        prev.next = null;
        this.tail = prev;
        this.length -= 1;
        return deleted;
    }

    get(val) {
        let current = this.head;
        let index = 0;
        while(current.next !== null) {
            if(current.val === val) {
                console.log('value ' + val + ' is found at position ' + index);
                return current;
            }
            current = current.next;
            index++;
        }
        return 'value not found!!'
    }

    getIdx(index) {
        if(index < 0 || index >= this.length) {
            return null
        }
        let counter = 0;
        let current = this.head;
        while(index !== counter) {
            current = current.next;
            counter++;
        }
        return current
    }

    setIdx(index, val) {
        const foundNode = this.getIdx(index);
        if(!foundNode) return false;
        foundNode.val = val;
        return true;
    }
    
}

let node3 = new LinkedList();
