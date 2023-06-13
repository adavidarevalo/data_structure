/*
Escribe un algoritmo que realice la suma de dos listas que representan
dos enteros positivos. Las listas están en posición invertida.

Ejemplo:
Input: 1->2->4->6, 5->2->8
Output: 6->4->2->7
6421+ 825 = 7246
*/
interface Node {
  value: number;
  next: Node | null;
}

const sumLists = (list1: Node | null, list2: Node | null): Node | null => {
  if (list1 === null || list2 === null) {
    return null;
  }

  let currentNode1: Node | null = list1;
  let currentNode2: Node | null = list2;
  let carry = 0;
  let resultList: Node | null = null;
  let currentNode: Node | null = null;

  while (currentNode1 !== null || currentNode2 !== null) {
    const value1 = currentNode1?.value || 0;
    const value2 = currentNode2?.value || 0;
    const sum = value1 + value2 + carry;
    carry = Math.floor(sum / 10);

    const newNode: Node = {
      value: sum % 10,
      next: null,
    };

    if (resultList === null) {
      resultList = newNode;
      currentNode = resultList;
    } else {
      currentNode!.next = newNode;
      currentNode = currentNode!.next;
    }

    if (currentNode1 !== null) {
      currentNode1 = currentNode1.next;
    }

    if (currentNode2 !== null) {
      currentNode2 = currentNode2.next;
    }
  }

  if (carry > 0) {
    const newNode: Node = {
      value: carry,
      next: null,
    };

    currentNode!.next = newNode;
  }

  return resultList;
};

export default sumLists;
