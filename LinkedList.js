export default class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    prepend(data){
        const newNode = new LinkedListNode(data)
        newNode.next = this.head
        this.head = newNode
        this.size++

        let index = 0
        this.index = index
        let node = this.head;
        while(node){
            node.index = index++
            node = node.next
        }
        return this.head
    }
    append(data){
        if(!this.head){
            this.head = new LinkedListNode(data, this.size)
            return this.head
        }
        let node = this.head;
        while(node.next !== null){
            node = node.next
        }
        this.size++
        node.next = new LinkedListNode(data, this.size)
        return this.head
    }
    insertAt(value, index){
        let node = this.head;
        while(node.next.index!==index){
            node = node.next
        }
        let current = node.next.next
        node.next = new LinkedListNode(value, node.index, current)
        while(node){
            node.index = index++
            node = node.next
        }
        return this.head
    }
    size(){
        let counter = 0;
        let node = this.head

        while(node){
            counter++;
            node = node.next
        }
        return counter
    }
    getFirst(){
        return this.head
    }
    getLast(){
        let node = this.head;
        while(node.next != null){
            node = node.next
        }
        return node
    }
    at(index){
        let node = this.head;
        while(node.index!==index){
            node = node.next
        }
        return node.data
    }
    pop(){
        let secondLast = this.head;
        while(secondLast.next.next != null){
            secondLast = secondLast.next
        }
        this.size--
        let removed = secondLast.next
        secondLast.next = null
        return removed
    }
    contains(value){
        let node = this.head;
        while(node.next!==null){
            if(node.data === value){
                return true;
            }
            node = node.next
        }
        return false
    }
    find(value){
        let node = this.head;
        while(node.next!==null){
            if(node.data === value){
                return node.index;
            }
            node = node.next
        }
        return null
    }
    toString(){
        let node = this.head;
        var str = ""
        while (node) {
            str += node.data + "->";
            node = node.next;
        }
        str += "NULL"
        return str  
      }
}

class LinkedListNode {
    constructor(data, index=null, next=null){
        this.data = data,
        this.index = index
        this.next = next
    }
}