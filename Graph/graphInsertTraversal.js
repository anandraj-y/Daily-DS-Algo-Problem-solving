class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) { 
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2){
        const newVertex1 = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
        this.adjacencyList[vertex1] = newVertex1;
        const newVertex2 = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
        this.adjacencyList[vertex2] = newVertex2;
    }

    //This one has good logic
    removeVertex(vertex) {
        const selectedVertex = this.adjacencyList[vertex];
        for(let vtx of selectedVertex) {
            this.removeEdge(vertex, vtx);
        }
        delete this.adjacencyList[vertex];
    }

    traversalDFS(node) {
        let result = [];
        let visited = {};
        const traverse = (vertex) => {
            if(!vertex) return;
            result.push(vertex);
            visited[vertex] = true;
            this.adjacencyList[vertex].forEach(vtx => {
                if(!visited[vtx]) {
                   return traverse(vtx);
                }
            })
            
        }
        traverse(node);
        return result;
    }

    traversalIterative(node) {
        let stack = [node];
        let result = [];
        const visited = {};
        visited[node] = true;
        let removed;
        while(stack.length) {
            removed = stack.pop();
            result.push(removed);
            this.adjacencyList[removed].forEach(item => {
                if(!visited[item]) {
                    visited[item] = true;
                    stack.push(item);
                }
            });
        }
        return result;
    }

    breadthFirstTraversal(node) {
        const result = [];
        const queue = [node];
        const visited = {};
        visited[node] = true;
        while(queue.length) {
            const removed = queue.shift();
            result.push(removed);
            this.adjacencyList[removed].forEach(item => {
                if(!visited[item]) {
                    visited[item] = true;
                    queue.push(item);
                }
            })
        }
        return result;
    }
}

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

//             A
//           /   \
//          B     C
//          |     |
//          D --- E
//           \   /
//             F

