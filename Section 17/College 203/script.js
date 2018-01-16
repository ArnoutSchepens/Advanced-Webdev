var set = new Set();
set.add(10);
set.add(20);
set.add(10);
set.add(15);
set.add(25);
console.log(set.size);
console.log(set.has(10));
console.log(set.has(15));
console.log(set.delete(20));
console.log(set.size);

set.forEach(val => console.log(val));

var newSet = new Set([3, 1, 4, 1, 2, 1, 5]);
newSet.forEach(val => console.log(val));