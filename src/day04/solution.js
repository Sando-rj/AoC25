/**
 * Advent of Code 2025 - Day 04
 * Template for daily solutions
 */

/**
 * Part 1 solution
 * @param {string} input - The puzzle input
 * @returns {string|number} The answer for part 1
 */
export function part1(input) {
  const array = input.split('\n').map(item => item.split(''));
  let result = 0;

  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[0].length; j++){
      if(array[i][j] !== "@")
        continue;
      const rollNum = findNeighbourCount(array, i, j);
      if(rollNum < 4)
        result++;
    }
  }

  return result;
}

function findNeighbourCount(array, x, y){
  let count = 0;
  const offset = [-1, 0, 1];
  for(let x_2 of offset){
    if(x + x_2 >= array.length || x + x_2 < 0)
      continue;
    for(let y_2 of offset){
      if(x_2 === 0 && y_2 === 0)
        continue;
      if(y + y_2 >= array[0].length || y + y_2 < 0)
        continue;

      if(array[x + x_2][y + y_2] === "@")
        count++;
    }
  } 
  return count;
}

/**
 * Part 2 solution
 * @param {string} input - The puzzle input
 * @returns {string|number} The answer for part 2
 */
export function part2(input) {
  const array = input.split('\n').map(item => item.split(''));
  let result = 0;
  let changeCount = 0;
  do {
    changeCount = 0;
    changeCount = removalIteration(array);
    result += changeCount;
  } while(changeCount > 0);

  return result;
}

function removalIteration(array){
  let changeCount = 0;
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[0].length; j++){
      if(array[i][j] !== "@")
        continue;
      const rollNum = findNeighbourCount(array, i, j);
      if(rollNum < 4){        
        changeCount++;
        array[i][j] = '.';
      }
    }
  }
  return changeCount;
}
