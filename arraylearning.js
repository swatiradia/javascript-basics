const strings = ['a','b','c','d'];

// console.log(strings[2]);

// console.log(strings.pop());
strings.push('e');
// console.log(strings.pop());
strings.unshift('x');

strings.splice(2, 0, 'alien')
console.log(strings);