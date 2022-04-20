/**
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 * 1 -> 2 -> 3 -> 4 -> 5 output=[3,4,5] | The middle node of the list is node 3.
 * 1 -> 2 -> 3 -> 4 -> 5 -> 6 output=[4,5,6] | Since the list has two middle nodes with values 3 and 4, we return the second one.
 */

var middleNode = function (head) {
  let counter = 0;
  let length = 0;
  let current = head;

  while (current !== null) {
    length++;
    current = current.next;
  }
  if (length === 1) return head;

  const middle = Math.ceil((length - 1) / 2);
  current = head;
  while (counter !== middle) {
    counter++;
    current = current.next;
  }
  return current;
};
