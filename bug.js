function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // Output: null

function bar(a, b) {
  return a + b;
}

console.log(bar(1, 2)); // Output: 3
console.log(bar(null, 2)); // Output: Uncaught TypeError: Cannot convert undefined or null to object
console.log(bar(1, null)); // Output: Uncaught TypeError: Cannot convert undefined or null to object
console.log(bar(null, null)); // Output: Uncaught TypeError: Cannot convert undefined or null to object