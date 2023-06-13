import SingleLinkedList from "./exercise_1";
import removeDups from "./exercise_2";

describe("removeDups", () => {
  let list: SingleLinkedList;

  beforeEach(() => {
    list = new SingleLinkedList();
  });

  test("removeDups should remove the duplicates values", () => {
    list.insertNewNode(1);
    list.insertNewNode(2);
    list.insertNewNode(2);
    list.insertNewNode(3);
    list.insertNewNode(4);
    list.insertNewNode(1);

    expect(removeDups(list)).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null,
          },
        },
      },
    });
  });
});
