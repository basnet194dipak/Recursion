# JavaScript Recursion

Small JavaScript examples exploring recursion and divide-and-conquer algorithms:

- `fibbo.js` demonstrates both an iterative and a recursive Fibonacci-number implementation.
- `merge.js` demonstrates merge sort, a recursive sorting algorithm.

## Prerequisites

- [Node.js](https://nodejs.org/) installed and available on your `PATH`

## Running the examples

Run the Fibonacci example:

```bash
node fibbo.js
```

Run the merge-sort example:

```bash
node merge.js
```

## Fibonacci example

The Fibonacci sequence starts with `0, 1`, and each following number is the sum of the previous two:

```text
0, 1, 1, 2, 3, 5, 8, 13, ...
```

`fibbo.js` contains an iterative loop and a recursive function named `fibbonachi`. The example currently calculates and prints the sequence using `n = 8`.

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

### Complexity

- Time complexity: `O(n log n)`
- Space complexity: `O(n)` for the temporary arrays

## Project structure

```text
.
├── README.md
├── fibbo.js
└── merge.js
```
