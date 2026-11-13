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
  var PROGRESS_MARKERS = [5, 10, 15, 20];
  var POWER_TYPES = ['freeze', 'fart', 'tentacle'];
  var POWER_EFFECTS = {
    freeze: { range: 34, coneDot: 0.45, duration: 4 },
    fart: { radius: 14, push: 10, duration: 3 },
    tentacle: { range: 28, coneDot: 0.65, duration: 5 }
  };
  var POWER_CONTROLS = {
    keyboardCode: 'KeyE',
    touchLabel: 'GADGET'
  };
  var GRU_BASE_SPEED = 4.2;
  var GRU_ANGRY_SPEED = 5.0;
  var EL_MACHO_SPEED = 6.2;
  var PURPLE_MINION_COUNT = 2;

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
    if (collectedBananas >= 15) return EL_MACHO_SPEED;
    return collectedBananas >= 5 ? GRU_ANGRY_SPEED : GRU_BASE_SPEED;
  }

  function purpleMinionCountForScore(collectedBananas) {
    return collectedBananas >= 10 ? PURPLE_MINION_COUNT : 0;
  }

  function gruFormForScore(collectedBananas) {
    return collectedBananas >= 15 ? 'el-macho' : 'gru';
  }

  function progressPercent(collectedBananas) {
    var bounded = Math.min(BANANA_GOAL, Math.max(0, collectedBananas));
    return (bounded / BANANA_GOAL) * 100;
  }

  function powerForRoll(roll) {
    var bounded = Math.min(0.999999, Math.max(0, roll));
    return POWER_TYPES[Math.floor(bounded * POWER_TYPES.length)];
  }

  function createPowerPickup(type) {
    if (!POWER_TYPES.includes(type)) {
      throw new Error('Unknown Minion Run power: ' + type);
    }
    return { type: type, charges: 1 };
  }

  function powerEffect(type) {
    var effect = POWER_EFFECTS[type];
    if (!effect) throw new Error('Unknown Minion Run power effect: ' + type);
    return Object.assign({}, effect);
  }

  return {
    BANANA_GOAL: BANANA_GOAL,
    MILESTONES: MILESTONES.slice(),
    PROGRESS_MARKERS: PROGRESS_MARKERS.slice(),
    POWER_TYPES: POWER_TYPES.slice(),
    POWER_CONTROLS: Object.assign({}, POWER_CONTROLS),
    GRU_BASE_SPEED: GRU_BASE_SPEED,
    GRU_ANGRY_SPEED: GRU_ANGRY_SPEED,
    EL_MACHO_SPEED: EL_MACHO_SPEED,
    PURPLE_MINION_COUNT: PURPLE_MINION_COUNT,
    hasWon: hasWon,
    stageForScore: stageForScore,
    crossedMilestones: crossedMilestones,
    gruSpeedForScore: gruSpeedForScore,
    purpleMinionCountForScore: purpleMinionCountForScore,
    gruFormForScore: gruFormForScore,
    progressPercent: progressPercent,
    powerForRoll: powerForRoll,
    createPowerPickup: createPowerPickup,
    powerEffect: powerEffect
  };
});
