// Sample test to verify Jest setup
describe('Sample Test Suite', () => {
  test('should pass basic test', () => {
    expect(1 + 1).toBe(2);
  });

  test('should work with strings', () => {
    expect('hello world').toContain('world');
  });

  test('should work with arrays', () => {
    const fruits = ['apple', 'banana', 'orange'];
    expect(fruits).toHaveLength(3);
    expect(fruits).toContain('banana');
  });
});
