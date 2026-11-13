'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const rules = require('../minion-run/game-rules.js');

test('the run objective is exactly 20 collected bananas', () => {
  assert.equal(rules.BANANA_GOAL, 20);
});

test('victory starts at 20 bananas and not before', () => {
  assert.equal(rules.hasWon(19), false);
  assert.equal(rules.hasWon(20), true);
  assert.equal(rules.hasWon(21), true);
});
