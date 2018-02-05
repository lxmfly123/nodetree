function Node (text = 'new node', children) {
  this.nodeData = { 
    text,
  };
  this.children = children;
}

const testNode = [
  new Node(
    'main-1',[
      new Node('sub-1-1', [
        new Node('sub-1-1-1'),
        new Node('sub-1-1-2'),
        new Node('sub-1-1-3'),
      ]),
      new Node('sub-1-2'),
      new Node('sub-1-3', [
        new Node('sub-1-3-1'),
        new Node('sub-1-3-2', [
          new Node('sub-1-3-2-1'),
          new Node('sub-1-3-2-2'),
        ]),
        new Node('sub-1-3-3'),
      ]),
    ]
  ),
  new Node(
    'main-2', [
      new Node('sub-2-1', [])
    ]),
];

// var state = []

// function traverseTree (nodes, level = 0, parentChildrenPaths, parentPath) {
//   nodes.map((node, index) => {
//     // let leftPadding = makePadding(level)
//     // console.log(leftPadding + node.nodeData.text)
//     parentChildrenPaths.push(node.nodeData.text);
//     var obj = {
//       path: `${level}-${index}`,
//       parentPath,
//       parentChildrenPaths
//     }
//     state.push(obj);
//     if (node.children) traverseTree(node.children, level + 1, [], node.nodeData.text )
//   })
// }

// traverseTree = (nodes) => {
//   const traverse = (subNodes, level = 0, parentChildrenPaths, parentPath) => {
//     subNodes.map((node, index) => {
//       let path = `${level}-${index}`;
//       // let leftPadding = makePadding(level)
//       // console.log(leftPadding + node.nodeData.text)
//       parentChildrenPaths.push(path);
//       var obj = {
//         text: node.nodeData.text,
//         path,
//         parentPath,
//         parentChildrenPaths
//       }
//       state.push(obj);
//       if (node.children) traverse(node.children, path, [], path )
//     })
//   };
//   traverse(nodes, 0, [])
// }

// function makePadding (level) {
//   let _level = level;
//   let padding = '!';
//   for (_level; level > 0; level--) {
//     padding += '  '
//   }
//   return padding;
// }

// traverseTree(testNode);
// console.log(state)

export default testNode;