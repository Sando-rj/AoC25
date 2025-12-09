/**
 * Common utility functions for Advent of Code solutions
 */

/**
 * Parse input into lines
 * @param {string} input - The puzzle input
 * @returns {string[]} Array of lines
 */
export function parseLines(input) {
  return input.split('\n').filter(line => line.length > 0);
}

/**
 * Parse input into lines and convert to numbers
 * @param {string} input - The puzzle input
 * @returns {number[]} Array of numbers
 */
export function parseNumbers(input) {
  return parseLines(input).map(Number);
}

/**
 * Split input by empty lines (double newline)
 * @param {string} input - The puzzle input
 * @returns {string[]} Array of groups
 */
export function parseGroups(input) {
  return input.split('\n\n').filter(group => group.length > 0);
}

/**
 * Parse a grid from input
 * @param {string} input - The puzzle input
 * @returns {string[][]} 2D array representing the grid
 */
export function parseGrid(input) {
  return parseLines(input).map(line => line.split(''));
}

/**
 * Get neighbors in a grid (4-directional)
 * @param {number} row - Row index
 * @param {number} col - Column index
 * @param {number} maxRow - Maximum row index
 * @param {number} maxCol - Maximum column index
 * @returns {Array<[number, number]>} Array of [row, col] pairs
 */
export function getNeighbors(row, col, maxRow, maxCol) {
  const neighbors = [];
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
  for (const [dr, dc] of directions) {
    const newRow = row + dr;
    const newCol = col + dc;
    if (newRow >= 0 && newRow <= maxRow && newCol >= 0 && newCol <= maxCol) {
      neighbors.push([newRow, newCol]);
    }
  }
  
  return neighbors;
}

/**
 * Get all neighbors in a grid (8-directional)
 * @param {number} row - Row index
 * @param {number} col - Column index
 * @param {number} maxRow - Maximum row index
 * @param {number} maxCol - Maximum column index
 * @returns {Array<[number, number]>} Array of [row, col] pairs
 */
export function getAllNeighbors(row, col, maxRow, maxCol) {
  const neighbors = [];
  
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      const newRow = row + dr;
      const newCol = col + dc;
      if (newRow >= 0 && newRow <= maxRow && newCol >= 0 && newCol <= maxCol) {
        neighbors.push([newRow, newCol]);
      }
    }
  }
  
  return neighbors;
}

/**
 * Calculate Manhattan distance
 * @param {number} x1 - X coordinate of point 1
 * @param {number} y1 - Y coordinate of point 1
 * @param {number} x2 - X coordinate of point 2
 * @param {number} y2 - Y coordinate of point 2
 * @returns {number} Manhattan distance
 */
export function manhattanDistance(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

/**
 * Greatest Common Divisor
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} GCD
 */
export function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

/**
 * Least Common Multiple
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} LCM
 */
export function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

/**
 * LCM for multiple numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} LCM
 */
export function lcmMultiple(numbers) {
  return numbers.reduce((acc, num) => lcm(acc, num), 1);
}

