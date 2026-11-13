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

  function hasWon(collectedBananas) {
    return collectedBananas >= BANANA_GOAL;
  }

  return {
    BANANA_GOAL: BANANA_GOAL,
    hasWon: hasWon
  };
});
