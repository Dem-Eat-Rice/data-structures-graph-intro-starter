
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


}

buildGraph(edges) {
  // Code goes here ...
}

breadthFirstTraversal(startingVertex) {
  // Code goes here ...
}

depthFirstTraversalIterative(startingVertex) {
  // Code goes here ...
}

depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
  // Code goes here ...
}

}

module.exports = {
  Graph
};
