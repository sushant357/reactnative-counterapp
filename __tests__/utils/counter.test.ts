
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from '../../src/utils/counter';

describe('Counter Utility Unit Tests', () => {
  describe('incrementCounter()', () => {
    test('should increment zero to one', () => {
      // Arrange
      const currentValue = 0;

      // Act
      const result = incrementCounter(currentValue);

      // Assert
      expect(result).toBe(1);
    });

    test('should increment an existing value by one', () => {
      const result = incrementCounter(5);

      expect(result).toBe(6);
    });
  });

  describe('decrementCounter()', () => {
    test('should decrement the value by one', () => {
      const result = decrementCounter(5);

      expect(result).toBe(4);
    });

    test('should return zero when decrementing one', () => {
      const result = decrementCounter(1);

      expect(result).toBe(0);
    });

    test('should not allow the counter to become negative', () => {
      const result = decrementCounter(0);

      expect(result).toBe(0);
    });
  });

  describe('resetCounter()', () => {
    test('should reset the counter to zero', () => {
      const result = resetCounter();

      expect(result).toBe(0);
    });
  });
});
