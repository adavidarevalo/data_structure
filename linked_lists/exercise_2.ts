import SingleLinkedList from "./exercise_1";
/*      
Escribe un algoritmo para eliminar los elementos duplicados en una Lista enlazada
Ejemplo:
Input: 1->2->2->3->4->1
Output: 1->2->3->4
Follow-up: ¿Cuál sería tu solución si no pudieras utilizar memoria adicional?
*/

interface Node {
  value: number;
  next: Node | null;
}

const removeDups = (linkedList: SingleLinkedList): Node | null => {
  if (linkedList.head === null) return null;
  let currentNode: Node = linkedList.head;

  const valuesProcessed: { [key: number]: {} } = {
    [currentNode.value]: {},
  };

  while (currentNode.next !== null) {
    const nextNode = currentNode.next as Node;

    if (valuesProcessed[nextNode.value]) {
      currentNode.next = nextNode.next || null;
    } else {
      valuesProcessed[nextNode.value] = {};
      currentNode = nextNode;
    }
  }

  return linkedList.head;
};

export default removeDups;
