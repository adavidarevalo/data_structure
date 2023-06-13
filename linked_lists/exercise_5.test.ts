import SingleLinkedList from "./exercise_1";
import sumLists from "./exercise_5";

describe("sumLists", () => {
  let list1: SingleLinkedList;
  let list2: SingleLinkedList;

  beforeEach(() => {
    list1 = new SingleLinkedList();
    list2 = new SingleLinkedList();
  });

  it("Debería devolver la suma correcta de dos listas", () => {
    list1.insertNewNode(1);
    list1.insertNewNode(2);
    list1.insertNewNode(4);
    list1.insertNewNode(6);

    list2.insertNewNode(5);
    list2.insertNewNode(2);
    list2.insertNewNode(8);

    expect(sumLists(list1.head, list2.head)).toEqual({
      value: 6,
      next: {
        value: 4,
        next: {
          value: 2,
          next: {
            value: 7,
            next: null,
          },
        },
      },
    });
  });
});
