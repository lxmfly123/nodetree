import React from 'react'

class DragDemo extends React.Component {
  onDragStart = (e) => {
    e.dataTransfer.setData('id', e.target.id)
  }

  onDrop = (e) => {
    e.preventDefault();
    e.target.appendChild(document.getElementById(e.dataTransfer.getData('id')))
  }

  onDragOver(e) {
    e.preventDefault();
  }

  render () {
    const { props } = this;
    return (
      <div>
        <div onDrop={this.onDrop} onDragOver={this.onDragOver} style={{ width: '70%', height: '5em', border: '1px solid blue' }}></div>
        <div onDrop={this.onDrop} onDragOver={this.onDragOver} style={{ width: '70%', height: '5em', border: '1px solid blue' }}></div>
        <p id='pp' draggable='true'
          onDragStart={this.onDragStart}
        >Drag Me to the Box.</p>
      </div>
    );
  }
}

export default DragDemo