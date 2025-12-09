/**
 * Advent of Code 2025 - Day 03
 * Template for daily solutions
 */

/**
 * Part 1 solution
 * @param {string} input - The puzzle input
 * @returns {string|number} The answer for part 1
 */
export function part1(input) {
  const lines = input.split('\n');
  let result = 0;

  for(let line of lines){
    let trimLine = line.trim();
    let [substring, firstNumber] = findFirstMaxNumber(trimLine, 9, true);
    let [_, secondNumber] = findFirstMaxNumber(substring, 9, false);
    result += parseInt(firstNumber + '' + secondNumber);
  }

  return result;
}

function findFirstMaxNumber(input, maxNumber, first){
  let max = 0;
  let maxIndex = 0;
  let maxLength = first ? input.length - 1 : input.length; 
  for(let i = 0; i<maxLength; i++){
    if(input[i] == maxNumber){
      return [input.substring(i + 1), maxNumber];
    }
    const number = parseInt(input[i]);
    if(number > max){
      max = number;
      maxIndex = i;
    }
  }
  return [input.substring(maxIndex + 1), max]
}

/**
 * Part 2 solution
 * @param {string} input - The puzzle input
 * @returns {string|number} The answer for part 2
 */
export function part2(input) {
  const lines = input.split('\n');
  let result = 0;

  for(let line of lines){
    let newLine = line.trim();
    let digit;
    let subResult = '';

    for(let i = 12; i > 0; i--) {
      [newLine, digit] = findFirstMaxNumberTwo(newLine, 9, i);
      subResult += '' + digit;
    }
    console.log(subResult);
    result += parseInt(subResult);
  }

  return result;
}

function findFirstMaxNumberTwo(input, maxNumber, bottom){
  let max = 0;
  let maxIndex = 0;
  let maxLength = input.length - bottom 
  for(let i = 0; i<=maxLength; i++){
    if(input[i] == maxNumber){
      return [input.substring(i + 1), maxNumber];
    }
    const number = parseInt(input[i]);
    if(number > max){
      max = number;
      maxIndex = i;
    }
  }
  return [input.substring(maxIndex + 1), max]
}