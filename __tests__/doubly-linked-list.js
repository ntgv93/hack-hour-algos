const { DoublyLinkedList } = require('../challenges/doubly-linked-list.js');

describe('Doubly LinkedList Test', () => {
  const list = new DoublyLinkedList();
  it('Should properly add nodes to the end of the doubly linked list', () => {
    list.add(1);
    list.add(2);
    list.add(3);
    expect(list.head.val).toBe(1);
    expect(list.head.next.val).toBe(2);
    expect(list.head.next.next.val).toBe(3);
    expect(list.tail.val).toBe(3);
  }, ['linked-lists']);

  it('Should properly link newly added nodes to the previous tail node', () => {
    expect(list.head.prev).toBe(null);
    expect(list.head.next.prev.val).toBe(1);
    expect(list.head.next.next.prev.val).toBe(2);
    expect(list.tail.prev.val).toBe(2);
    expect(list.tail.prev.prev.val).toBe(1);
  }, ['linked-lists']);

  it('Should properly remove head node if it contains inputted value', () => {
    list.remove(1);
    expect(list.head.val).toBe(2);
    expect(list.head.prev).toBe(null);
    expect(list.head.next.val).toBe(3);
    expect(list.head.next.prev.val).toBe(2);
    expect(list.tail.val).toBe(3);
  }, ['linked-lists']);

  it('Should properly remove node from middle of doubly linked list', () => {
    list.add(4);
    list.remove(3);
    expect(list.head.val).toBe(2);
    expect(list.head.next.val).toBe(4);
    expect(list.head.next.prev.val).toBe(2);
    expect(list.tail.val).toBe(4);
  }, ['linked-lists']);

  it('Should properly remove node from end of doubly linkedlist', () => {
    list.remove(4);
    expect(list.head.val).toBe(2);
    expect(list.head.next).toBe(null);
    expect(list.tail.val).toBe(2);
    expect(list.tail.next).toBe(null);

  }, ['linked-lists']);

  it('Should properly remove only the first instance of node containing inputted value to be removed', () => {
    list.add(3);
    list.add(2);
    list.remove(2);
    expect(list.head.val).toBe(3);
    expect(list.head.next.val).toBe(2);
    expect(list.tail.val).toBe(2);
    expect(list.tail.prev.val).toBe(3);
  }, ['linked-lists']);
});