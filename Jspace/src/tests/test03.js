QUnit.test('addFive()', function(assert) {
  assert.deepEqual(addFive(0), 5, '5 is correct');
  assert.deepEqual(addFive(2), 7, '7 is correct');
  assert.deepEqual(addFive(-4), 1,'1 is correct');
  assert.equal(addFive(1), '6', '6 as string is correct');
  assert.notDeepEqual(addFive(1), '6', '6 as string failure is correct');
});
