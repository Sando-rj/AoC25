/**
 * Advent of Code 2025 - Day 01
 * Template for daily solutions
 */

/**
 * Part 1 solution
 * @param {string} input - The puzzle input
 * @returns {string|number} The answer for part 1
 */
export function part1(input) {
  const lines = input.split('\n');
  let count = 50;
  let password = 0;
  for (const line of lines) {
    const newLine = line.replace('L','-').replace("R","");

    count += parseInt(newLine);
    count %= 100;

    if (count === 0) {
      password++;
    }
  }

  return password;
}

/**
 * Part 2 solution
 * @param {string} input - The puzzle input
 * @returns {string|number} The answer for part 2
 */
export function part2(input) {
  const lines = input.split('\n');
  
  let count = 50;
  let previousCount = 50;
  let password = 0;
  for (const line of lines) {
    const newLine = line.replace('L','-').replace("R","");
    let addedCount = parseInt(newLine);

    while (addedCount >= 100) {
      addedCount -= 100;
      password++;
    }

    while (addedCount <= -100) {
      addedCount += 100;
      password++;
    }

    previousCount = count;
    count += addedCount;

    if(count < 0){
      count += 100;
      if(previousCount > 0) {
        password++;
      }
    } 
    else if(count >= 100) {
      count -= 100;
      password++;      
    }
    else if(count === 0) {
      password++;
    }

    console.log("Line " + parseInt(newLine) + " Count: " + count + " Password: " + password);
  }

  return password;  
}


