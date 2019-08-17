import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    //your code here
    this.props.store.checkItem(e.target.value)
  }
  editItem = () => {
    //your code here
  }
  deleteItem = () => {
    //your code here
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}>
        <input type="checkbox" value={item.name} onClick={this.checkItem} />
        {item.name}
        {/*   your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
      */}
      </div>)
  }
}

export default Item