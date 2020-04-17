'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length === 0) {
      return undefined;
    }

    const result = this[0];

    if (this.length > 0) {
      for (let i = 1; i < this.length; i++) {
        this[i - 1] = this[i];
      }
    }
    this.length--;

    return result;
  };
}

module.exports = applyCustomShift;
