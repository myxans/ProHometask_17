const declaredVariable;
const someData = 99;
const obj = {age: 33};

typeof 37 === "Number" +
typeof obj === 'object'
typeof true === 'Boolean' +
typeof 3.14 === 'Number' +
typeof obj.name === 'undefined'
typeof 42 === 'Number' +
typeof "" === 'String' +
typeof "bla" === 'String' +
typeof Boolean(1) === 'Boolean' +
typeof !!1 === 'Boolean' +
typeof obj.age === 'number' 
typeof Infinity === 'Number' +
typeof NaN === 'Number' +
typeof (someData + " Wisen") === 'string';
typeof Number("1") === 'number' +
typeof Number("shoe") === 'number' +
typeof `template literal` === 'string' +
typeof "1" === 'string' +
typeof typeof 1 === 'string'
typeof false === 'boolean' +
typeof String(1) === 'string' +
typeof undefined === 'undefined' +
typeof { a: 1 } === 'object' +
typeof declaredVariable === 'undefined' +
typeof [1, 2, 4] === 'object'
typeof null === 'object'
typeof "John" === 'string' +
typeof ([] + '1') === 'string' +
typeof (1 + '1') === 'string' +
typeof (10 * '2') === 'number' +