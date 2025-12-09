/**
 * Advent of Code 2025 - Day 02
 * Template for daily solutions
 */

/**
 * Part 1 solution
 * @param {string} input - The puzzle input
 * @returns {string|number} The answer for part 1
 */
export function part1(input) {
  const lines = input.split('\n');
  const idRangeTable = lines[0].split(',');
  let result = 0;

  for(const val of idRangeTable) {
    const rangeIds = val.split('-');
    result += findMotifNumbers(parseInt(rangeIds[0]), parseInt(rangeIds[1]));
  }

  return result;
}

function findMotifNumbers(startId, endId){
  let numbersSum = 0;
  for(let id = startId; id <= endId; id++){   
    let stringId = id.toString(); 
    if(stringId.length % 2 == 1) continue;
    let idLength = parseInt(stringId.length / 2);
    if(isMotif(stringId, idLength)) {
      numbersSum += id;
    }
    /*
    while(idLength > 0){      
      if(isMotif(stringId, idLength)){
        numbersSum += id;
        break;
      }
      idLength = parseInt(idLength / 2);
    }
      */
  }
  return numbersSum;
}

function isMotif(id, motifSize){
  const split = id.substring(0, motifSize);
  return split.repeat(id.length / motifSize) === id;
}

/**
 * Part 2 solution
 * @param {string} input - The puzzle input
 * @returns {string|number} The answer for part 2
 */
export function part2(input) {
  const lines = input.split('\n');
  const idRangeTable = lines[0].split(',');
  let result = 0;

  for(const val of idRangeTable) {
    const rangeIds = val.split('-');
    result += findHardMotifNumbers(parseInt(rangeIds[0]), parseInt(rangeIds[1]));
  }

  return result;
}

function findHardMotifNumbers(startId, endId){
  let numbersSum = 0;
  for(let id = startId; id <= endId; id++){   
    let stringId = id.toString(); 
    let idLength = parseInt(stringId.length / 2);
    
    while(idLength > 0){      
      if(isMotif(stringId, idLength)){
        numbersSum += id;
        break;
      }
      idLength = nextValidSize(stringId.length, idLength - 1);
    }    
  }
  return numbersSum;
}

function nextValidSize(totalLength, currentLength){
  let newLength = currentLength;
  while(Math.floor(totalLength / newLength) - (totalLength / newLength) !== 0){
    newLength--;
  }
  return newLength;
}
