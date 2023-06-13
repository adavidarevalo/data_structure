import SingleLinkedList from "./exercise_1";

describe("SingleLinkedList", () => {
  let list: SingleLinkedList;

  beforeEach(() => {
    list = new SingleLinkedList();
  });

  test("insertNewNode should insert a new node at the end of the list", () => {
    list.insertNewNode(1);
    list.insertNewNode(2);
    list.insertNewNode(3);

    expect(list.head).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null,
        },
      },
    });
  });

  test("deleteNode should remove the node with the given value", () => {
    list.insertNewNode(1);
    list.insertNewNode(2);
    list.insertNewNode(3);

    list.deleteNode(2);

    expect(list.head).toEqual({
      value: 1,
      next: {
        value: 3,
        next: null,
      },
    });
  });

  test("deleteNode should handle deleting the head node", () => {
    list.insertNewNode(1);
    list.insertNewNode(2);
    list.insertNewNode(3);

    list.deleteNode(1);

    expect(list.head).toEqual({
      value: 2,
      next: {
        value: 3,
        next: null,
      },
    });
  });

  test("deleteNode should handle deleting the only node in the list", () => {
    list.insertNewNode(1);

    list.deleteNode(1);

    expect(list.head).toBeNull();
  });

  test("deleteNode should handle deleting the last node", () => {
    list.insertNewNode(1);
    list.insertNewNode(2);
    list.insertNewNode(3);

    list.deleteNode(3);

    expect(list.head).toEqual({
      value: 1,
      next: {
        value: 2,
        next: null,
      },
    });
  });
});
