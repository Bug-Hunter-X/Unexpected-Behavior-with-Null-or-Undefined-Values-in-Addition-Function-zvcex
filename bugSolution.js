function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    throw new Error('Inputs cannot be null or undefined.');
  }
  return a + b;
}
// OR, using default values:
function foo(a = 0, b = 0) {
  return a + b; 
}