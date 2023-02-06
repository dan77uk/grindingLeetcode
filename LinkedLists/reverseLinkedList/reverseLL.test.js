const reverseLinkedList = require("./reverseLL");
const create = require("../createSingleLinkedList/createLinkedList");

describe("reverseLinkedList", () => {
  it("should reverse a linked list", () => {
    // Set up initial list
    const node = new create.ListNode(1);
    const node2 = new create.ListNode(2);
    const node3 = new create.ListNode(3);
    const node4 = new create.ListNode(4);
    const node5 = new create.ListNode(5);

    node.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    const linkedList = new create.LinkedList(node);

    // Reverse list
    const result = reverseLinkedList(linkedList.getFirst());

    // Assign new head node to new linked list
    const reversedList = new create.LinkedList(result);

    // Assert
    expect(reversedList.getLast()).toEqual({ data: 1, next: null });
    expect(reversedList.getFirst()).toEqual({
      data: 5,
      next: {
        data: 4,
        next: {
          data: 3,
          next: { data: 2, next: { data: 1, next: null } },
        },
      },
    });
  });
});
