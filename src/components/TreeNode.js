import React from 'react'

// console.log(testNode.children[0].children[1].nodeData)

class TreeNode extends React.Component {

  checkNodeAndSub = (node, checkState) => {
    node.nodeData.isChecked = checkState;
    node.children.map( child => {this.checkNodeAndSub(child, checkState)} )
  }

  handleCheck = (node, e) => {
    e.stopPropagation();
    this.checkNodeAndSub(node, !node.nodeData.isChecked)
    console.log(node)
    this.forceUpdate();
  }

  handleFold = (node, e) => {
    e.stopPropagation();
    node.nodeData.isFolded = !node.nodeData.isFolded;
    console.log(node)
    this.forceUpdate();
  }

  expandNode = node => (
    <ul>
      <li 
        onClick={e => this.handleCheck(node, e)} 
        style = {{ color: node.nodeData.isChecked ? 'red' : 'black' }}
      >
        <span onClick={e => this.handleFold(node, e)}>{node.nodeData.isFolded ? '[f]' : '[F]' }</span>
        <span>{node.nodeData.isChecked ? '[x]' : '[ ]' }</span>
        <span>{node.nodeData.text}</span>
        { node.nodeData.isFolded ? null :
          <ul>
            {node.children.map((childNode, index) => (
              <ul key={index}>{this.expandNode(childNode)}</ul>
            ))}
          </ul>
        }
      </li>
    </ul>
  )

  render () {
    const { tree } = this.props;
    var expandedTree = this.expandNode(tree)
    return expandedTree;
  }
}

export default TreeNode