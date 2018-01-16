var firstMap = new Map();
var arrayKey = [];
var objectKey = {};

firstMap.set(1, 'Alex');
firstMap.set(false, 'a boolean');
firstMap.set('nice', 'a string');
firstMap.set(arrayKey, [1, 2, 3, 4, 5]);
firstMap.set(objectKey, { a: 1 });
console.log(firstMap.delete('nice'));
console.log(firstMap.size);
console.log(firstMap.get(1));
console.log(firstMap.get(false));
console.log(firstMap.get(arrayKey));
console.log(firstMap.get(objectKey));

firstMap.forEach(val => console.log(val));
