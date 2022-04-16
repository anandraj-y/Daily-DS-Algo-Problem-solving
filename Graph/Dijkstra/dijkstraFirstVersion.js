import PriorityQueue from "./priorityQueueHeaps.js";

class Dijkstra {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra(start, end) {
    const node = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    const path = [];
    for (let item in this.adjacencyList) {
      if (item === start) {
        distances[item] = 0;
        node.enqueue(item, 0);
      } else {
        distances[item] = Infinity;
        node.enqueue(item, Infinity);
      }
      previous[item] = null;
    }
    // Dequeue one item at a time
    while (node.values.length) {
      smallest = node.dequeue().val;
      if (smallest === end) {
        //Build up the path to return
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbour];
          // Calculating the new distance to neighbouring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighour = nextNode.node;
          if (candidate < distances[nextNeighour]) {
            // updating new smallest distance to neightbour
            distances[nextNeighour] = candidate;
            //Updating previous - How we got to next neighbour
            previous[nextNeighour] = smallest;
            //Enqueue in the priority queue with new priority
            node.enqueue(nextNeighour, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const dij = new Dijkstra();

dij.addVertex("A");
dij.addVertex("B");
dij.addVertex("C");
dij.addVertex("D");
dij.addVertex("E");
dij.addVertex("F");

dij.addEdge("A", "B", 4);
dij.addEdge("A", "C", 2);
dij.addEdge("B", "E", 3);
dij.addEdge("C", "D", 2);
dij.addEdge("C", "F", 4);
dij.addEdge("D", "E", 3);
dij.addEdge("D", "F", 1);
dij.addEdge("E", "F", 1);
console.log(dij.dijkstra("A", "E"));
