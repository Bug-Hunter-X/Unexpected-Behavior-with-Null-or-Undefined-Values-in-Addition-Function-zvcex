# JavaScript Bug: Handling Null or Undefined in Addition Function

This repository demonstrates a common JavaScript bug related to handling null or undefined values in a function performing addition. The initial code returns 0 if either input is null or undefined. This might lead to unexpected results in certain situations.  The solution offers improved error handling and clearer indication of invalid inputs.

## Bug
The `foo` function attempts to add two numbers, but if either number is null or undefined, it silently returns 0.  This might mask errors that should be explicitly addressed.

## Solution
The improved version provides more robust handling of null or undefined inputs by throwing an error that offers more context.  Alternatively, different default values could be implemented for safer behavior, depending on the requirements.