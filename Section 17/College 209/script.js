var o1 = { name: 'Alex' };
var o2 = o1;
o2.name = 'Abel';
console.log(o1);
console.log(o2);
// ES2015
var o3 = { name: 'Jonathan' };
var o4 = Object.assign({}, o3);
o4.name = 'Aaron';
console.log(o3);
console.log(o4);

var names = { names: ['Alex', 'Abel'] };
var namesClone = Object.assign({}, names);
namesClone.names.push('Jonathan');
console.log(names);
console.log(namesClone);

var divs = document.getElementsByTagName('div');
console.log(divs.reduce);
// ES5
var convertedDivsES5 = [].slice.call(divs);
console.log(convertedDivsES5.reduce);
// ES2015
var convertedDivsES2015 = Array.from(divs);
console.log(convertedDivsES2015.reduce);

var firstSet = new Set([1, 2, 3, 4, 3, 2, 1]);
var arrayFromSet = Array.from(firstSet);
console.log(firstSet);
console.log(arrayFromSet);

