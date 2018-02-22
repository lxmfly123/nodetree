import React from 'react'
import TreeNode from './NewTreeNode'

class Tree extends React.Component {
  state = {
    checkedPaths: [],
    foldedPaths: [],
    selectedPaths: [],
  }

  renderTreeNode = (node, index, path = 0) => {
    let nodeProps = {
      root: this,
      path: `${path}-${index}`,
      draggable: true,
    }
    nodeProps.isChecked = this.state.checkedPaths.includes(nodeProps.path);
    nodeProps.isFolded = this.state.foldedPaths.includes(nodeProps.path);
    nodeProps.isSelected = this.state.selectedPaths.includes(nodeProps.path);
    // console.log(React.cloneElement(node, nodeProps).props.path);
    return React.cloneElement(node, nodeProps);

    // return React.cloneElement(node, nodeProps);
  }

  onCheck = node => {
    // console.log(node.props.path)
    const newCheckedPaths = [...this.state.checkedPaths];
    if (this.state.checkedPaths.includes(node.props.path)) {
      const index = this.state.checkedPaths.indexOf(node.props.path);
      newCheckedPaths.splice(index, 1);
    } else {
      newCheckedPaths.push(node.props.path);
    }
    this.setState({ checkedPaths: newCheckedPaths })
  }

  onFold = node => {
    const newFoldedPaths = [...this.state.foldedPaths];
    if (this.state.foldedPaths.includes(node.props.path)) {
      const index = this.state.foldedPaths.indexOf(node.props.path);
      newFoldedPaths.splice(index, 1);
    } else {
      newFoldedPaths.push(node.props.path);
    }
    this.setState({ foldedPaths: newFoldedPaths })
  }

  onSelect = node => {
    const newSelectedPaths = [...this.state.selectedPaths];
    if (this.state.selectedPaths.includes(node.props.path)) {
      const index = this.state.selectedPaths.indexOf(node.props.path);
      newSelectedPaths.splice(index, 1);
    } else {
      newSelectedPaths.push(node.props.path);
    }
    this.setState({ selectedPaths: newSelectedPaths })
  }

  render () {
    return (
      // <div>{React.Children.map(this.props.children, this.renderTreeNode)}</div>
      <ul>
        {React.Children.map(this.props.children, this.renderTreeNode, this)}
      </ul>
    )
  }
}

export default Tree;
export {
  TreeNode
}