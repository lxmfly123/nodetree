import React from 'react'
import Tree from './Tree'
import TreeNode from './NewTreeNode'
import nodes from '../data/testnode'

class Demo extends React.Component {
  // state = {
  //   foldedKeys: [],
  //   checkedKeys: [],
  //   selectedKeys: [],
  // }

  // onCheck = expandedKeys => {}

  // onSelect = selectedKeys => {}

  // onFold = foldedKeys => {}

  renderTree = nodes => (
    nodes.map((node, index) => {
      if (node.children && node.children.length > 0) {
        return (
          <TreeNode title={node.nodeData.text} key={index}>
            {this.renderTree(node.children)}
          </TreeNode>
        )
      }
      return <TreeNode title={node.nodeData.text} key={index} />
    })
  )

  render () {
    return (
      <div style={{ margin: '0 2em', border: '1px solid black', borderRadius: '2em', width: '30em' }}>
        <Tree>
          {this.renderTree(nodes)}
        </Tree>
      </div>
    );
  }
}

export default Demo;