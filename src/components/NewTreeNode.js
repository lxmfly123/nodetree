import React from 'react'
import './Tree.css'

class NewTreeNode extends React.Component {

  onSelect = () => {
    this.props.root.onSelect(this);
  }

  onCheck = () => {
    console.log(this.props.path)
    this.props.root.onCheck(this);
  }

  onFold = () => {
    this.props.root.onFold(this);
  }

  render () {
    const props = this.props;
    const hasChildren = !!(props.children && props.children.length)
    return (
      <ul>
        <li className={['node',
          props.isSelected ? 'selected' : undefined,
          props.isChecked ?  'checked' : undefined,
        ].join(' ')}
        >
          <span className={['folder', hasChildren ? undefined : 'noChildren'  ].join(' ')} onClick={this.onFold}>{props.isFolded ? '▸' : '▾'}</span>
          <span className={'checkbox'} onClick={this.onCheck}>
            <span className='checker'>x</span>
          </span>
          <span className={'title'} draggable={props.draggable} onClick={this.onSelect}>{props.title}</span>
          {hasChildren && !props.isFolded ? React.Children.map(props.children, (node, index) => (
            props.root.renderTreeNode(node, index, this.props.path)
          )) : undefined}
        </li>
      </ul> 
    );
  }
}

export default NewTreeNode