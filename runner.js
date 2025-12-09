import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const day = process.argv[2];

if (!day) {
  console.error('Usage: node runner.js <day>');
  console.error('Example: node runner.js 1');
  process.exit(1);
}

const dayPadded = day.padStart(2, '0');
const dayPath = join(__dirname, 'src', `day${dayPadded}`);

if (!existsSync(dayPath)) {
  console.error(`Day ${day} not found. Expected path: ${dayPath}`);
  process.exit(1);
}

const solutionPath = join(dayPath, 'solution.js');
if (!existsSync(solutionPath)) {
  console.error(`Solution file not found: ${solutionPath}`);
  process.exit(1);
}

// Try to load input from day folder first, then from inputs folder
let inputPath = join(dayPath, 'input.txt');
if (!existsSync(inputPath)) {
  inputPath = join(__dirname, 'inputs', `day${dayPadded}.txt`);
}

let input = '';
if (existsSync(inputPath)) {
  input = readFileSync(inputPath, 'utf-8').trim();
} else {
  console.warn(`Warning: Input file not found at ${inputPath}`);
  console.warn('Running without input file.');
}

// Ensure stdout is not buffered for immediate console.log display
process.stdout.setEncoding('utf8');

try {
  const { part1, part2 } = await import(`./src/day${dayPadded}/solution.js`);
  
  console.log(`\n🎄 Advent of Code 2025 - Day ${day}\n`);
  console.log('='.repeat(40));
  
  if (part1) {
    console.log('\nPart 1:');
    console.log('─'.repeat(40));
    const start1 = performance.now();
    const result1 = part1(input);
    const time1 = performance.now() - start1;
    console.log('─'.repeat(40));
    console.log(`Result: ${result1}`);
    console.log(`Time: ${time1.toFixed(2)}ms`);
  }
  
  if (part2) {
    console.log('\nPart 2:');
    console.log('─'.repeat(40));
    const start2 = performance.now();
    const result2 = part2(input);
    const time2 = performance.now() - start2;
    console.log('─'.repeat(40));
    console.log(`Result: ${result2}`);
    console.log(`Time: ${time2.toFixed(2)}ms`);
  }
  
  console.log('\n' + '='.repeat(40) + '\n');
} catch (error) {
  console.error('Error running solution:', error);
  process.exit(1);
}

