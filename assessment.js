// #1 Create a var called 'up' that says 'down'
 var up = "down";


// #2 Use the var iHeart to create a new var called iHeartJavascript that says 'I heart javascript'
var iHeart = 'I heart';

var iHeartJavascript = "I heart javascript";



// #3  Make an object called developer
// developer has a title of Junior (String)
// developer has a salary of 55000 (Number)
// developer has a laptop, that has type Macbook, and year 2016 (object)
// developer is not billGates (boolean)
// developer likes isolation, caffeine, and pizza (array of strings)


var developer = {
	title: "Junior",
	salary: 55000,
	billGates: false,
	likes: ["isolation", "caffeine", "pizza"],
	laptop: {
		type: "Macbook",
		year: 2016,
	}




}


// #4 Change my dog's name to Fido using dot notation
var myDog = {
	type: 'beagle',
	name: 'Spot'
};


myDog.name = "Fido";

// Change my don't type to hairless using square bracket notation
var myOtherDog = {
	type: 'poodle',
	name: 'Fluffy'
};

myOtherDog["type"] = "hairless";

// #5 Create an object that tracks a count of kids in each grade in a school.  Call it 'school'
// The key should be the grade (string) and the value should be how many kids there are.
// Our school has 50 kids in first, 30 kids in second and 80 kids in third


var school = {
	"first": 50,
	"second": 30,
	"third": 80,
}



// #6 Loop through this object and change every property that begins with the word 'secret' to have a value of 'redacted'
var briefing = {
	secretLocation: 'antarctica',
  secretWeapon: 'hands',
	nonsecretCodename: 'purple hippopotamus',
	secretInfo: "it's gon' be cold",
  date: 'future',
};

for (var key in briefing) {
	if (key[0] === "s"){
		briefing[key] = "redacted"
	}
}

console.log(briefing)



// #7 Create an array of strings that are the 7 days of the week. Call your array daysOfWeek

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// #8 Using this array do the following
var jedi = ['Yoda', 'Mace Windu', 'Obi-Wan'];
// add 'Luke' to the end
jedi.push("Luke");
console.log(jedi);

// remove 'Yoda' and store him in a var called firstJedi

var firstJedi = jedi.shift(0)
console.log(jedi);

// add 'Mario' to the start of the array
jedi.unshift ("Mario");
console.log(jedi);

// remove 'Obi-Wan' from the array and store him in a var called secondJedi
var spliceArray = jedi.splice(2,1);
var secondJedi = spliceArray[0];
console.log(jedi);
console.log(secondJedi);

// leave 'Mace Windu' in the array but put a copy of him on a var called thirdJedi
var thirdJedi = jedi.slice(1, -1)[0];
thirdJedi.toString(0);
console.log(jedi);
console.log(thirdJedi);



// #9 Write a function called cutInLine, that takes in an array and an item, and adds the item
// after the first item in the array and return the array
// EX: cutInLine([1,2,3,4], 8) => [1,8,2,3,4];

function cutInLine(array, item) {
	array.splice(1,0, item);
	return array
};

console.log(cutInLine);


// #10 Write a function called removeThings, that takes in an array of things (strings or numbers), and a 'thing' (a string or a number).
// Removes all instances of that 'thing' from the array. And return the modified array.
// The order of the array should not be changed
// removeThings(['a', 1, 4, 'a'], 'a') => [1,4]

function removeThings() {
	var array = ['a', 1, 4, 'a']
	for (var i = array.length - 1; i >= 0;i--){
		if(array[i] === 0) {
			return array
		}
	}
}



// #11 Write a function tripleTheFun that takes 1 parameter: a number or a string. It triples numbers, and
// repeats strings. Example: 4->12, 2.5->7.5, 'Awesome'->'AwesomeAwesomeAwesome'

function tripleTheFun(number){
	if(typeof number === "number"){
		return number * 3;
	}
}

// #12 Write function getPropertyValue that takes in an object, and the name of a property on the object as a string
// return the value from the object that corresponds to the property

function getPropertyValue(object){
	var object = {
		"prop": "name"
	}
	this.object = 1
	return object
};





// #13 Write a function called clockIn that takes in an employee and department name
// and returns an object with a name, department, and timestamp which is
// the current time as a Date object

function clockIn(employee, department){
	object= {
		employee: employee,
		department: department,
		timestamp: new Date()
	}
	return object;
}




// #14 Create a function called spiderTest that takes in an object that is an actor, it looks to see if the actor's name is Andrew Garfield and changes the actor object to have a property called spiderRating with a value of 10.  If their name is Tobey Maguire set spiderRating to 0.  otherwise set spiderRating to 'not a spiderman'.

function spiderTest(actor){

	if(actor.name === "Andrew Garfield"){
		actor.spiderRating =10;
	}
	else if(actor.name === "Tobey Maguire"){
		actor.spiderRating = 0;
	}
	else {
		actor.spiderRating = "not a spiderman"
	}
		console.log(actor)
}

// #15 Create a function called whatIsItOutside that takes in a temperature (number), a humidity(number), and a cloudiness(number), in that order. Using the following to return the correct values
/*
    temperature over 85 and humidity over 45 - return "I'm all sweat"
    temperature under 40 and cloudiness over 60 - return "I have icicles"
    temperature over 85 and humidity under 45 and cloudiness under 20 - return "I'm literally in the desert"
    temperature over 90 or humidity over 55 or cloudiness over 65 - return "Hmm, probably not"
    Otherwise - return "I love outside"
*/


function whatIsItOutsideoutside(temperature, humidity, cloudiness) {
	if (temperature > 85 && humidity >45) {
		return ("I'm all sweat");
	} else if (temperature < 40 && cloudiness > 60) {
		return ("I have icecicles");
	} else if (temperature > 85 && humidity < 45 && cloudiness <20) {
		return ("I'm literally in the desert");
	} else if (temperature > 90 || humidity > 55 || cloudiness > 65){
		return ("Hmm, probably not");
	} else {
		return ("I love outside");
	}
}






// #16 Create a function called callerBack that takes in a function (holla) and a string parameter(back) and invokes it(holla) with the string(back) + ' back'.
// IE - If I call you with 'Give it' you should invoke holla with 'Give it back'



function callerBack(holla, back) {
	var hello = back + " back";
	return holla(hello);
}
