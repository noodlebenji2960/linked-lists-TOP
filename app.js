import LinkedList from "./LinkedList.js"

const ll = new LinkedList()


ll.append(69)
ll.append(66)
ll.append(4342)
ll.prepend(77)
ll.append(12)
ll.append(62)
ll.append(432)
ll.prepend(2)

console.group("Linked List")
    console.log(JSON.stringify(ll))
    console.groupEnd("Linked List")

console.group("First Node:")
    console.log(ll.getFirst())
    console.groupEnd("First Node:")

console.group("Last Node:")
    console.log(ll.getLast())
    console.groupEnd("Last Node:")

console.group("Removed Node:")
    console.log(ll.pop())
    console.groupEnd("Removed Node:")

console.group("Removed Node:")
    console.log(ll.pop())
    console.groupEnd("Removed Node:")

console.log(ll)

console.log("Linked List size: "+ll.size)
console.log("Node at Index 4: "+ll.at(4))
console.log("list contains 12: "+ll.contains(12))
console.log("list contains 432: "+ll.contains(432))
console.log("value at index 12: "+ll.find(12))
console.log("value at index 432: "+ll.find(432))
console.log(ll.toString())
console.log(ll.insertAt(999, 2))