import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    @action addItem = (name) => {
        // your code here
        this.list.push(new Item(name))
    }
    @action editItem = (itemName, newLocation) => {
        // your code here
        let item = this.list.find(i => i.name === itemName)
        item.location = newLocation
    }
    @action deleteItem = (name) => {
        // your code here
        for (let i in this.list) {
            if (this.list[i].name === name) {
                this.list.splice(i,1)
            }
        }
    }
}

