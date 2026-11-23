# JavaScript Recursion

Small JavaScript examples exploring recursion and divide-and-conquer algorithms:

- `fibbo.js` demonstrates both an iterative and a recursive Fibonacci-number implementation.
- `merge.js` demonstrates merge sort, a recursive sorting algorithm.
- `fibbo.test.js` and `merge.test.js` contain Jest test cases for the two implementations.

## Prerequisites

- [Node.js](https://nodejs.org/) installed and available on your `PATH`

Install the project dependencies:

```bash
npm install
```

## Running the examples

Run the Fibonacci example:

```bash
node fibbo.js
```

Run the merge-sort example:

```bash
node merge.js
```

## Running the tests

Run all Jest tests:

```bash
npm test
```

Run a specific test file:

```bash
npm test -- --runInBand fibbo.test.js
npm test -- --runInBand merge.test.js
```

The merge-sort tests use `toEqual()` because arrays are objects and Jest's `toBe()` checks object reference identity rather than array contents.

## Fibonacci example

The Fibonacci sequence starts with `0, 1`, and each following number is the sum of the previous two:

```text
0, 1, 1, 2, 3, 5, 8, 13, ...
```

`fibbo.js` contains an iterative loop and a recursive function named `fibbonachi`. The example currently calculates and prints the sequence using `n = 8`.

The `fibbonachi` function is exported so it can be tested with Jest. `fibbo.test.js` spies on `console.log`, filters numeric values, and verifies that the function prints `[0, 1, 1, 2, 3, 5, 8, 13]`.

### Complexity

For an implementation that generates `n` Fibonacci values:

- Iterative time complexity: `O(n)`
- Iterative space complexity: `O(1)`
- Recursive time complexity: `O(n)` for this tail-recursive implementation
- Recursive space complexity: `O(n)` due to the recursive call stack

## Merge-sort example

`merge.js` provides `merge_sort(number_series)`, which:

1. Returns a one-element array unchanged.
2. Splits the array into left and right halves.
3. Recursively sorts each half.
4. Merges the sorted halves into a new array.

The example sorts:

```javascript
[2, 9, 6, 7, 4, 1, 3, 2];
```

and prints:

```text
[1, 2, 2, 3, 4, 6, 7, 9]
```

`merge_sort` is exported for testing. `merge.test.js` covers empty arrays, single-item arrays, already sorted arrays, duplicate values, unsorted values, and mixed positive values.

### Complexity

- Time complexity: `O(n log n)`
- Space complexity: `O(n)` for the temporary arrays

## Project structure

```text
.
├── README.md
├── fibbo.js
├── fibbo.test.js
├── merge.js
├── merge.test.js
├── package.json
└── babel.config.js
```
