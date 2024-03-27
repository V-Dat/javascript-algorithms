#### Class Syntax

1. Basic

```js
class Cookies {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
}
```

2. Pointer

In Js when we need to create an variable we can declare it as referance value or primitive value or assign to another variable.

- When assign to primitive value (number, string, boolean, null, undefined). Primitive value is storaged inside memory so we to create an pointer. variable is assign directly to that primary value

- When assign varoable to referance value (object, array, function, Date, map, set, weekmap, weekset, ...). That referance value available inside momory so we need to create it inside memory and referance to it by memoryId.

3. Building linked-list class

```js
class LinkedList {
  constructor(value) {}
  push(value) {}
  unshift(value) {}
  insert(index, value) {}
  remove(index) {}
  pop() {}
  shift() {}
}

const myLinkedList = new LinkedList(23);
myLinkedList.push(7);
myLinkedList.unshift(3);
myLinkedList.insert(1, 11);
myLinkedList.remove(1);
myLinkedList.pop();
myLinkedList.shift();
```
