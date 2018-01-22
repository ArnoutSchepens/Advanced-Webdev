// ES5
console.log(Math.pow(2, 4));
// ES2015
console.log(2 ** 4);

var nums = [1, 2, 3, 4];
var total = 2;
// ES2015
for (let i = 0; i < nums.length; i++) {
	total = Math.pow(total, nums[i]);
}
console.log(total);
total = 2;
// ES2016
for (let i = 0; i < nums.length; i++) {
	total **= nums[i];
}
console.log(total);

// ES2015
console.log(nums.indexOf(3) > -1);
console.log(nums.indexOf(44) > -1);
// ES2016
console.log(nums.includes(3));
console.log(nums.includes(44));