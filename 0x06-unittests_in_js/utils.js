const Utils = {
  /**
   * Performs a mathematical operation on two numbers
   * @static
   * @param type {string} - mathematical operation [SUM. SUBTRACT or DIVIDE]
   * @param a {number} - first number
   * @param b {number} - second number
   * @returns {number|string} - result of the operation or 'Error' if division by zero
   */
  calculateNumber(type, a, b) {
    const num1 = Math.round(a);
    const num2 = Math.round(b);

    const operations = {
      SUM: () => num1 + num2,
      SUBTRACT: () => num1 - num2,
      DIVIDE: () => (num2 === 0 ? 'Error' : num1 / num2),
    };

    if (!operations[type]) {
      throw new Error('Invalid operation type');
    }

    return operations[type]();
  },
};

module.exports = Utils;
