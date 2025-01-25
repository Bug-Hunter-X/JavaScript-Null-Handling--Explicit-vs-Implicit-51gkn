# JavaScript Null Handling: Explicit vs Implicit

This repository demonstrates a common error in JavaScript related to null value handling.  The example shows that explicitly checking for null values is necessary to avoid unexpected behavior.

## The Bug

The `bar` function fails when given null values as it does not explicitly handle this case. The `+` operator cannot directly handle `null` values and throws a TypeError. The `foo` function shows the correct way of handling null values: using explicit checks and returning a default or null value.

## The Solution

The solution is simple: always explicitly check for null or undefined values before performing operations that might not handle them properly.  The `foo` function demonstrates the best practice for handling null values.