/*
Dada una lista enlazada simple y un valor N, devuelve el nodo N empezando por el final

Ejemplo:

Input: 1->2->4->6, 2
Output: 4
*/
interface Node {
  value: number;
  next: Node | null;
}

const nthNodeToLast = (
  list: Node | null,
  positionFromToEnd: number
): number | null => {
  if (list === null) return null;

  let currentNode = list;
  let currentNodePointer = list;

  for (let index = 0; index < positionFromToEnd; index++) {
    if (currentNodePointer === null) break;
    currentNodePointer = currentNodePointer.next as Node;
  }

  while (currentNodePointer !== null) {
    currentNode = currentNode.next as Node;
    currentNodePointer = currentNodePointer.next as Node;
  }

  return currentNode.value;
};

export default nthNodeToLast;
