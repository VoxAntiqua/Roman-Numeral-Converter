Roman Numeral Converter accepts integers between 1 and 3999, and returns that number in Roman numerals.
In this implementation, a specific text string is returned for each digit, and each digit has its own function and set of string values to return. Given more time, there is a more elegant approach by which the largest possible value is subtracted from the input, the associated Roman numeral string is appended to the output, and this process is repeated until the input reaches zero.
This was developed as an exercise for freeCodeCamp.org's course in JavaScript Algorithms and Data Structures.