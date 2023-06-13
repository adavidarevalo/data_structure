import SingleLinkedList from "./exercise_1";
import swapNodesInPairs from "./exercise_6";

describe("swapNodesInPairs", () => {
  let list1: SingleLinkedList;

  beforeEach(() => {
    list1 = new SingleLinkedList();
  });

  it("Debería devolver la lista intercambiado en parejas", () => {
    list1.insertNewNode(1);
    list1.insertNewNode(2);
    list1.insertNewNode(4);
    list1.insertNewNode(6);
    list1.insertNewNode(8);

    expect(swapNodesInPairs(list1.head)).toEqual({
      value: 2,
      next: {
        value: 1,
        next: {
          value: 6,
          next: {
            value: 4,
            next: {
              value: 8,
              next: null,
            },
          },
        },
      },
    });
  });
});
