(function (root, factory) {
  'use strict';

  var rules = factory();

  if (typeof module === 'object' && module.exports) {
    module.exports = rules;
  }

  if (root) {
    root.MinionRunRules = rules;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var BANANA_GOAL = 20;
  var MILESTONES = [5, 10, 15];
  var GRU_BASE_SPEED = 4.2;
  var GRU_ANGRY_SPEED = 5.0;

  function hasWon(collectedBananas) {
    return collectedBananas >= BANANA_GOAL;
  }

  function stageForScore(collectedBananas) {
    if (collectedBananas >= 15) return 3;
    if (collectedBananas >= 10) return 2;
    if (collectedBananas >= 5) return 1;
    return 0;
  }

  function crossedMilestones(previousScore, currentScore) {
    return MILESTONES.filter(function (milestone) {
      return previousScore < milestone && currentScore >= milestone;
    });
  }

  function gruSpeedForScore(collectedBananas) {
    return collectedBananas >= 5 ? GRU_ANGRY_SPEED : GRU_BASE_SPEED;
  }

  return {
    BANANA_GOAL: BANANA_GOAL,
    MILESTONES: MILESTONES.slice(),
    GRU_BASE_SPEED: GRU_BASE_SPEED,
    GRU_ANGRY_SPEED: GRU_ANGRY_SPEED,
    hasWon: hasWon,
    stageForScore: stageForScore,
    crossedMilestones: crossedMilestones,
    gruSpeedForScore: gruSpeedForScore
  };
});
