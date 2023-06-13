interface Node {
  value: number;
  next: Node | null;
}

class SingleLinkedList {
  public head: Node | null;
  public length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertNewNode(value: number) {
    if (this.head === null) {
      this.head = {
        value,
        next: null,
      };
      return;
    }
    const newNode = {
      value: value,
      next: null,
    };
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.length++;
  }

  deleteNode(value: number) {
    if (this.head === null) return;

    if (this.head.value === value) {
      this.head = this.head.next || null;
      return;
    }

    let currentNode: Node | null = this.head;

    while (currentNode.next !== null) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next as Node;
        return;
      }
      currentNode = currentNode.next;
    }
  }
}

export default SingleLinkedList;
