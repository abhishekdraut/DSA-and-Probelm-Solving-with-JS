class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.temp = null;
  }

  createList(data) {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      this.temp = this.head;
    } else {
      this.temp.next = newNode;
      this.temp = this.temp.next;
    }
  }
  printList() {
    this.temp = this.head;
    while (this.temp.next != null) {
      console.log(this.temp.data);
      this.temp = this.temp.next;
    }
    console.log(this.temp.data);
  }
}

ls = new LinkedList();
const value = prompt("enter your choice"); // same as the input from python
console.log(value);
ls.createList(1);
ls.createList(2);
ls.createList(3);
ls.createList(4);
ls.createList(5);
ls.printList();
