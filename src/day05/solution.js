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
  let [rangeList, idList] = parseInput(input);
  let result = 0;
  let rangeIndex = 0;
  let idIndex = 0;
  idList = idList.sort((a,b) => parseInt(a) - parseInt(b));
  rangeList = rangeList.sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

  while(idIndex < idList.length){
    while(idIndex < idList.length && parseInt(rangeList[rangeIndex][0]) > parseInt(idList[idIndex]))
      idIndex++;
    while(rangeIndex < rangeList.length && parseInt(rangeList[rangeIndex][1]) < parseInt(idList[idIndex]))
      rangeIndex++;
    if(rangeIndex < rangeList.length && idIndex < idList.length && parseInt(rangeList[rangeIndex][0]) <= parseInt(idList[idIndex]) && parseInt(rangeList[rangeIndex][1]) >= parseInt(idList[idIndex]))
      result++;
    idIndex++
  }
  return result;
}

function parseInput(input){
  let allrange = input.split("\r\n");
  let rangeList = [];
  let idList = [];

  let isRange = true;

  for(let item of allrange){
    if(item == "") {
      isRange = false;
      continue;
    } 

    if(isRange)
      rangeList.push(item.split('-'));
    else 
      idList.push(item);
  }

  return [rangeList, idList];
}

/**
 * Part 2 solution
 * @param {string} input - The puzzle input
 * @returns {string|number} The answer for part 2
 */

export function minePart2(input) {
  let [rangeList, idList] = parseInput(input);
  rangeList = rangeList.sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
  let fusedRangeList = fuseRanges(rangeList);
  let result = 0;
  for(let range of fusedRangeList) {
    result += range[1] - range[0] + 1;
  }
  return result;
}


export function part2(input){
  let total = 0;
  const { fresh, _ } = parseInput2(input);
  fresh.sort((a, b) => a.start - b.start);

  for (let i = 0; i < fresh.length - 1; i++) {
      const a = fresh[i];
      for (let j = 1; j < fresh.length; j++) {
          // list is sorted by start value
          // a.start will always be <= b.start
          const b = fresh[j];
          if (b.start < a.start) continue; // WHY!!!! The list is sorted this should never happen
          if (a !== b && b.start <= a.end) {
              // console.log('a', a, 'overlaps', 'b', b);
              fresh[i] = { start: a.start, end: Math.max(a.end,b.end) };
              fresh.splice(j, 1);
              // restart the loop
              i = -1;
              break;
          }
      }
  }

  // console.log('=== reduced product ids ===');
  // fresh.forEach(x => console.log(x));

  total = fresh.reduce((acc, cur) => (cur.end - cur.start + 1) + acc, 0)
  console.log(`Answer: ${total}`);
  console.log("Mine Answer: " + minePart2(input));
  console.log("Diff Answer: " + (total - minePart2(input)));
}

function parseInput2(input) {
  const fresh = []
  const available = [];
  let availbleTable = false;
  const lines = input.toString().split('\r\n')

  for (const line of lines) {
      if (line === '') {
          availbleTable = true;
          continue;
      }

      if (!availbleTable) {
          const ranges = line.split('-');
          const start = parseInt(ranges[0], 10);
          const end = parseInt(ranges[1], 10);
          fresh.push({ start, end });
      } else {
          available.push(parseInt(line, 10));
      }
  }

  return { fresh, available };
}

function fuseRanges(rangeList){  
  let fuseRanges = [];
  let curr = 0;
  while(curr < rangeList.length){
    let next = curr + 1;
    let higherRange = parseInt(rangeList[curr][1]);
    while(next < rangeList.length && higherRange >= parseInt(rangeList[next][0])) {
      higherRange = Math.max(rangeList[curr][1], rangeList[next][1]);
      next++;
    }
    fuseRanges.push([parseInt(rangeList[curr][0]), higherRange]);
    curr = next;
  }
  return fuseRanges;
}