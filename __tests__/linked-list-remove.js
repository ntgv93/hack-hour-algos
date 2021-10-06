const {LinkedList, Node, linkedListRemove, linkedListRemoveMultiple} = require('../challenges/linked-list-remove');

describe('linkedListRemove test', () => {
  const ll = new LinkedList();
  beforeEach(() => {
    const nodeList = new Node('a');
    nodeList.next = new Node('d');
    nodeList.next.next = new Node('b');
    nodeList.next.next.next = new Node('c');
    nodeList.next.next.next.next = new Node('b');
    ll.head = nodeList;
  });

  it('Should delete the first instance of the node', () => {
    const deletedNode = linkedListRemove(ll, 'a');
    expect(deletedNode.val).toEqual('a');
    expect(ll.head.val).toEqual('d');
    expect(ll.head.next.val).toEqual('b');
  });

  it('Should delete node with value that appears later in the linked list', () => {
    linkedListRemove(ll, 'c');
    expect(ll.head.val).toBe('a');
    expect(ll.head.next.val).toBe('d');
    expect(ll.head.next.next.val).toBe('b');
    expect(ll.head.next.next.next.val).toBe('b');
  });

  it('Bonus: Should be solved in constant space', () => {
    const secondNode = ll.head.next;
    linkedListRemove(ll, 'a');
    expect(secondNode).toBe(ll.head);
  });
});

xdescribe ('linkedListRemoveMultiple', ()=>{
  const llMultiple = new LinkedList();
  beforeEach(()=>{
    const nodeList = new Node('a');
    nodeList.next = new Node('d');
    nodeList.next.next = new Node('c');
    nodeList.next.next.next = new Node('d');
    nodeList.next.next.next.next = new Node('b');
    llMultiple.head = nodeList;
  })

  it('Bonus: Should delete all instances of the node', () => {
    const newLL = linkedListRemoveMultiple(llMultiple, 'd');
    const firstRemoveRef = newLL.head.next.val;
    expect(firstRemoveRef).toBe('c');
    expect(newLL.head.next.next.val).toBe('b');
    expect(newLL.head.next.next.next).toBeNull();
  });

  it('Bonus: Should be solved in constant space', () => {
    const newLL = linkedListRemoveMultiple(llMultiple, 'a');
    expect(newLL).toBe(llMultiple.head.next);
  });
})
