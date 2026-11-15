
/**
 * Increases the counter by 1.
 */
export const incrementCounter = (currentValue: number): number => {
  return currentValue + 1;
};

/**
 * Decreases the counter by 1.
 * Minimum counter value is 0.
 */
export const decrementCounter = (currentValue: number): number => {
  return Math.max(0, currentValue - 1);
};

/**
 * Resets the counter to 0.
 */
export const resetCounter = (): number => {
  return 0;
};
