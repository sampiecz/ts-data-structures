import DoublyLinkedList from "./DoublyLinkedList";
import { test_list } from "./ListTest.test";

test("DoublyLinkedList", function() {
  const list = new DoublyLinkedList<number>();
  test_list(list);
});
