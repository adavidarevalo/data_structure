import SingleLinkedList from "./exercise_1";
/* 
Escribe un algoritmo para combinar dos listas enlazadas simples ordenadas. 
El resultado debe ser una única lista enlazada ordenada. Devuelve su head.

Ejemplo:
Input: 1->2->4->6, 2->3->5
Output: 1->2->2->3->4->5->6
*/

interface Node {
  value: number;
  next: Node | null;
}

const destructureLinkedLists = (
  list1: SingleLinkedList,
  list2: SingleLinkedList
): number[] => {
  let currentNode1: Node = list1.head as Node;
  let currentNode2: Node = list2.head as Node;

  const listValues: number[] = [currentNode1.value, currentNode2.value];

  while (currentNode1.next !== null || currentNode2.next !== null) {
    const nextNode1 = currentNode1?.next as Node;
    const nextNode2 = currentNode2?.next as Node;

    if (nextNode1) {
      listValues.push(nextNode1.value);
      currentNode1 = nextNode1;
    }

    if (nextNode2) {
      listValues.push(nextNode2.value);
      currentNode2 = nextNode2;
    }
  }

  return listValues.sort();
};

const mergeLinkedLits = (
  list1: SingleLinkedList,
  list2: SingleLinkedList
): Node | null => {
  if (list1.head === null && list2.head === null) return null;
  if (list1.head === null) return list2.head;
  if (list2.head === null) return list1.head;

  const listValues = destructureLinkedLists(list1, list2);

  const SingleLinked = new SingleLinkedList();

  listValues.forEach((value) => {
    SingleLinked.insertNewNode(value);
  });

  return SingleLinked.head;
};

export default mergeLinkedLits;
