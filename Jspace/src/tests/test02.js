QUnit.test('isEven()', function(assert) {
  assert.ok(isEven(0), '0 is even');
  assert.ok(isEven(2), '2 is even');
  assert.ok(isEven(-4), '-4 is even');
  assert.notOk(isEven(1), '1 is not even');
  assert.notOk(isEven(-7), '-7 is not even');
});
