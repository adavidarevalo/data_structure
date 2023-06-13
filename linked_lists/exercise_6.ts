/*
Escribe un algoritmo que intercambie parejas de nodos adyacentes sin
modificar el valor interno de los nodos.
Ejemplo:
Input: 1->2->4->6->8
Output: 2->1->6->4->8
*/

interface Node {
  value: number;
  next: Node | null;
}

const swapNodesInPairs = (list: Node | null) => {
  if (list === null || list.next === null) return list;

  const tmp = list.next.next;
  list.next.next = list;
  list = list.next;
  (list.next as Node).next = swapNodesInPairs(tmp);

  return list;
};

export default swapNodesInPairs;
