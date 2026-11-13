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

test('banana stages change once at 5, 10, and 15 bananas', () => {
  assert.deepEqual(rules.MILESTONES, [5, 10, 15]);
  assert.equal(rules.stageForScore(4), 0);
  assert.equal(rules.stageForScore(5), 1);
  assert.equal(rules.stageForScore(9), 1);
  assert.equal(rules.stageForScore(10), 2);
  assert.equal(rules.stageForScore(14), 2);
  assert.equal(rules.stageForScore(15), 3);
});

test('crossed milestones are returned even when a score jump skips a threshold', () => {
  assert.deepEqual(rules.crossedMilestones(4, 11), [5, 10]);
  assert.deepEqual(rules.crossedMilestones(11, 16), [15]);
  assert.deepEqual(rules.crossedMilestones(16, 20), []);
});

test('Gru becomes faster when the player reaches five bananas', () => {
  assert.equal(rules.gruSpeedForScore(4), 4.2);
  assert.ok(rules.gruSpeedForScore(5) > rules.gruSpeedForScore(4));
  assert.equal(rules.gruSpeedForScore(5), 5);
});
