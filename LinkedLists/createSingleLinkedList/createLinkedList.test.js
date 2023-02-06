const create = require("./createLinkedList");

describe("createLinkedList", () => {
  it("should create an empty Linked List", () => {
    const result = new create.LinkedList();
    expect(result.head).toBe(null);
  });

  it("should contain a single node when created with a single node", () => {
    const node = new create.ListNode("headNode");
    const linkedList = new create.LinkedList(node);

    const size = linkedList.size();
    const first = linkedList.getFirst();

    expect(size).toBe(1);
    expect(first).toEqual({ data: "headNode", next: null });
  });

  it("should contain multiple nodes when inserted with multiple nodes", () => {
    const node = new create.ListNode("headNode");
    const node2 = new create.ListNode("secondNode");
    const node3 = new create.ListNode("thirdNode");
    const node4 = new create.ListNode("lastNode");

    node.next = node2;
    node2.next = node3;
    node3.next = node4;

    const linkedList = new create.LinkedList(node);

    const size = linkedList.size();
    const first = linkedList.getFirst();
    const last = linkedList.getLast();

    expect(size).toBe(4);
    expect(first.next.data).toBe("secondNode");
    expect(last).toEqual({ data: "lastNode", next: null });
  });
});
