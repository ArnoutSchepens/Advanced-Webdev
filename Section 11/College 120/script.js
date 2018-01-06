function counter() {
	var count = 0;
	return function inner() {
		count++;
		return count;
	};
}

var counter1 = counter();
console.log(counter1);
console.log(counter1());
console.log(counter1());

var counter2 = counter();
console.log(counter2);
console.log(counter2());
console.log(counter1());

function classRoom() {
	var instructors = ["Ellie", "Colt"];
	return {
		getInstructors: function() {
			return instructors.slice();
		},
		addInstructor: function(instructor) {
			instructors.push(instructor);
			return instructors;
		}
	};
}

var course = classRoom();
console.log(course);
console.log(course.getInstructors());
console.log(course.addInstructor("Matt"));
console.log(course.addInstructor("Tim"));
console.log(course.getInstructors());

var course2 = classRoom();
console.log(course2.getInstructors());
console.log(course2.addInstructor("Jonathan"));
console.log(course2.getInstructors());
console.log(course.getInstructors());
console.log(course.getInstructors().pop());
console.log(course.getInstructors());
