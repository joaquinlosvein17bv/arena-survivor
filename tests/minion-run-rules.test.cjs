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

test('two purple minions join the chase at ten bananas', () => {
  assert.equal(rules.purpleMinionCountForScore(9), 0);
  assert.equal(rules.purpleMinionCountForScore(10), 2);
  assert.equal(rules.purpleMinionCountForScore(20), 2);
});

test('Gru changes to the El Macho form at fifteen bananas', () => {
  assert.equal(rules.gruFormForScore(14), 'gru');
  assert.equal(rules.gruFormForScore(15), 'el-macho');
  assert.ok(rules.gruSpeedForScore(15) > rules.gruSpeedForScore(10));
});

test('the progress HUD uses milestone markers and clamps at the goal', () => {
  assert.deepEqual(rules.PROGRESS_MARKERS, [5, 10, 15, 20]);
  assert.equal(rules.progressPercent(0), 0);
  assert.equal(rules.progressPercent(10), 50);
  assert.equal(rules.progressPercent(20), 100);
  assert.equal(rules.progressPercent(25), 100);
});

test('golden bananas award one deterministic gadget charge', () => {
  assert.equal(rules.powerForRoll(0), 'freeze');
  assert.equal(rules.powerForRoll(0.34), 'fart');
  assert.equal(rules.powerForRoll(0.67), 'tentacle');
  assert.deepEqual(rules.createPowerPickup('freeze'), { type: 'freeze', charges: 1 });
});

test('the freeze ray has a forward range and a timed freeze', () => {
  assert.deepEqual(rules.powerEffect('freeze'), {
    range: 34,
    coneDot: 0.45,
    duration: 4
  });
});

test('the fart gun defines a close push and confusion cloud', () => {
  assert.deepEqual(rules.powerEffect('fart'), {
    radius: 14,
    push: 10,
    duration: 3
  });
});

test('the tentacle gun roots the nearest forward pursuer', () => {
  assert.deepEqual(rules.powerEffect('tentacle'), {
    range: 28,
    coneDot: 0.65,
    duration: 5
  });
});

test('gadget controls are exposed for keyboard and touch', () => {
  assert.deepEqual(rules.POWER_CONTROLS, {
    keyboardCode: 'KeyE',
    touchLabel: 'GADGET'
  });
});

test('each milestone has one cinematic message and duration', () => {
  assert.deepEqual(rules.milestonePresentation(5), {
    title: 'GRU IS FASTER',
    subtitle: 'Keep moving!',
    duration: 1.2
  });
  assert.deepEqual(rules.milestonePresentation(10), {
    title: 'PURPLE MINIONS INCOMING',
    subtitle: 'They can slow you down.',
    duration: 1.45
  });
  assert.deepEqual(rules.milestonePresentation(15), {
    title: 'EL MACHO HAS ARRIVED',
    subtitle: 'Final chase!',
    duration: 1.7
  });
  assert.equal(rules.milestonePresentation(7), null);
});

test('arrival, power impact, and transformation effects have bounded durations', () => {
  assert.equal(rules.visualEffectDuration('purpleArrival'), 1);
  assert.equal(rules.visualEffectDuration('powerImpact'), 0.55);
  assert.equal(rules.visualEffectDuration('elMachoTransformation'), 1.2);
});

test('El Macho transformation frames reveal and settle predictably', () => {
  assert.deepEqual(rules.elMachoTransformFrame(0), {
    scale: 1,
    spin: 0,
    reveal: false,
    glow: 0
  });
  const middle = rules.elMachoTransformFrame(0.5);
  assert.equal(middle.reveal, true);
  assert.ok(middle.scale > 1.25);
  assert.ok(middle.glow > 0.99);
  assert.deepEqual(rules.elMachoTransformFrame(1), {
    scale: 1.12,
    spin: Math.PI * 3,
    reveal: true,
    glow: 0
  });
});
