/**
 * Advent of Code 2025 - Day 05
 * Template for daily solutions
 */

/**
 * Part 1 solution
 * @param {string} input - The puzzle input
 * @returns {string|number} The answer for part 1
 */
export function part1(input) {
  let lines = input.split('\n');
  let [columns, operators] = parseIntoLinesOfOperations(lines);
  let result = [];
  for(let i = 0; i < columns.length; i++){
    result.push(calculateColumn(columns[i], operators[i]));
  }
  console.log(result);
  return result.reduce((acc, cur) => acc + cur, 0);
}

function parseIntoLinesOfOperations(lines){
  let copyLines = lines[0].slice();
  let numberOfLines = copyLines.split(/[ ]+/).length;
  console.log(numberOfLines);
  let result = Array.from({ length: numberOfLines }, () => []);  
  for(let i = 0; i < lines.length - 1; i++){
    let line = lines[i].trim().split(/[ ]+/);
    for(let j = 0; j < line.length; j++){
      result[j].push(parseInt(line[j]));
    }
  }
  return [result, lines[lines.length - 1].split(/[ ]+/)];
}

function calculateColumn(column, operator){
  let initial = operator === '+' ? 0 : 1;
  return column.reduce((acc, cur) => {
    if(operator === '+')
      return acc + cur;
    else if(operator === '*')
      return acc * cur;
  }, initial);
}

/**
 * Part 2 solution
 * @param {string} input - The puzzle input
 * @returns {string|number} The answer for part 2
 */
export function part2(input){
  let lines = input.split('\n');
  let result = 0;
  return result;
}
