import SingleLinkedList from "./exercise_1";
import mergeLinkedLits from "./exercise_3";

describe("mergeLinkedLits", () => {
  let list1: SingleLinkedList;
  let list2: SingleLinkedList;

  beforeEach(() => {
    list1 = new SingleLinkedList();
    list2 = new SingleLinkedList();
  });

  test("mergeLinkedLits should merge two list and sort", () => {
    list1.insertNewNode(1);
    list1.insertNewNode(2);
    list1.insertNewNode(4);
    list1.insertNewNode(6);

    list2.insertNewNode(2);
    list2.insertNewNode(3);
    list2.insertNewNode(5);

    expect(mergeLinkedLits(list1, list2)).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: 4,
              next: {
                value: 5,
                next: {
                  value: 6,
                  next: null,
                },
              },
            },
          },
        },
      },
    });
  });
});
