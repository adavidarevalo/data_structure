import SingleLinkedList from "./exercise_1";
import nthNodeToLast from "./exercise_4";

describe("nthNodeToLast", () => {
  let list: SingleLinkedList;

  beforeEach(() => {
    list = new SingleLinkedList();
  });

  it("Debería devolver el nodo correcto", () => {
    list.insertNewNode(1);
    list.insertNewNode(2);
    list.insertNewNode(4);
    list.insertNewNode(6);

    const result = nthNodeToLast(list.head, 2);

    expect(result).toEqual(4);
  });

  it("Debería devolver null si no se encuentra el nodo", () => {
    const head = null;

    const result = nthNodeToLast(head, 1);

    expect(result).toBe(null);
  });
});
