const {Node, kthToLastNode} = require('../challenges/kth-to-last-node.js');

describe('kth-to-last-node test', ()=>{
  
  const a = new Node('A');
  const b = new Node('B');
  const c = new Node('C');
  const d = new Node('D');
  const e = new Node('E');

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;

  it('should return undefined for empty lists', () => {
    expect(kthToLastNode(2, undefined)).toBeUndefined();
  })

  it('should return undefined for 0 inputs', () => {
    expect(kthToLastNode(0, a)).toBeUndefined();
  })

  it('should return undefined for inputs kth inputs outside range', () => {
    expect(kthToLastNode(8, a)).toBeUndefined();
  })

  it('should successfully retrieve the 2nd to last node', ()=>{
    expect(kthToLastNode(2, a)).toBe('D');
  });

  it('should successfully retrieve the 4th to last node', ()=>{
    expect(kthToLastNode(4, a)).toBe('B');
  })

  it('should successfully retrieve the last node', ()=>{
    expect(kthToLastNode(1, a)).toBe('E');
  })

});