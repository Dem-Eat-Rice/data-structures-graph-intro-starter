
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (this.adjList.hasOwnProperty(vertex)) {
      return
    } else {
      this.adjList[vertex] = [];
    }
  }
  //{a: ["c"], b: []}
  // addEdges(srcValue, destValue) {
  //   if (!this.adjList[srcValue]) {
  //     this.adjList[srcValue] = [destValue];
  //     // this.adjList[destValue] = [srcValue]
  //   }

    // if (!this.adjList[destValue]) {
    //   this.adjList[destValue] = [srcValue];
    // } else {
    //   this.adjList[destValue] = [...this.adjList[srcValue], srcValue];
    // }


    //{a: ["c"], b: []}
    addEdges(srcValue, destValue) {
      if (!this.adjList[destValue]) {
        this.addVertex(destValue);
      };
      if (!this.adjList[srcValue]) {
        this.addVertex(srcValue);
      };
      this.adjList[srcValue] = [...this.adjList[srcValue], destValue];
      this.adjList[destValue] = [...this.adjList[destValue], srcValue];
};

buildGraph(edges) {
for (let i = 0 ; i < edges.length; i++) {
  if (edges[i].length <= 1) {
    this.addVertex(edges[i][0]);
  } else {
    this.addEdges(edges[i][0], edges[i][1])
}
}
return this.adjList
}

breadthFirstTraversal(startingVertex) { //"a" "h" adjlist[h]
  let visited = new Set();
  let queue = [startingVertex]; //[e, a,b,f,g,a,g,b]
  while (queue.length) {
    let current = queue.shift();
    if(!visited.has(current)) {
      visited.add(current);
      queue.push(...this.adjList[current]);
    }
  }

return Array.from(visited);
}


depthFirstTraversalIterative(startingVertex) { //{a: [b,g]}
let visited = new Set();
let stack = [startingVertex]
while (stack.length) {
  let popped = stack.pop()
  if (visited.has(popped)) {
    continue
  } else {
    visited.add(popped)
    stack.push(...this.adjList[popped])
  }
}
return Array.from(visited);
}

depthFirstTraversalRecursive(startingVertex, visited = new Set()) {
let vertices = [startingVertex]
let i = vertices.length - 1
let ughhh  = vertices.pop()
  // let test = vertices.pop() //vertices [b,c,d,]
  if (visited.has(ughhh)) {
return;
  }
    visited.add(ughhh)
    vertices.push(...this.adjList[ughhh])

  this.depthFirstTraversalRecursive(vertices[i], visited)

// if (vertices.length == 0) {
return Array.from(visited)}
// }
}

module.exports = {
  Graph
};
