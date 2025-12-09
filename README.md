# Advent of Code 2025

Solutions for Advent of Code 2025 in JavaScript.

## Setup

```bash
npm install
```

## Usage

Run a specific day's solution:

```bash
npm start <day>
# or
node runner.js <day>
```

Example:
```bash
npm start 1
```

## Debugging

### Using VS Code/Cursor Debugger

1. **Set breakpoints** in your solution file by clicking in the gutter next to line numbers
2. **Press F5** or go to Run → Start Debugging
3. **Select a debug configuration:**
   - **Debug Day (Current)** - Prompts for day number
   - **Debug Day 1/2/3** - Debugs specific days
   - **Debug Current File** - Debugs the currently open file

### Debug Features

- Set breakpoints in `src/dayXX/solution.js` files
- Step through code (F10 = step over, F11 = step into, Shift+F11 = step out)
- Inspect variables in the Debug panel
- View call stack
- Use the Debug Console to evaluate expressions

### Quick Debug

You can also use the command line debugger:
```bash
npm run debug <day>
```

## Project Structure

```
.
├── src/
│   └── day01/          # Day 1 solution
│       ├── solution.js # Main solution file
│       └── input.txt   # Day 1 input (optional, can use inputs/ folder)
├── inputs/             # Input files (gitignored)
├── utils/              # Utility functions
├── runner.js           # Solution runner
└── package.json
```

## Adding a New Day

1. Create a new folder in `src/` named `dayXX` (e.g., `day01`)
2. Copy `src/template.js` to `src/dayXX/solution.js`
3. Add your input file to `inputs/dayXX.txt` or `src/dayXX/input.txt`
4. Implement `part1` and `part2` functions
5. Run with `npm start XX`

# AoC25
