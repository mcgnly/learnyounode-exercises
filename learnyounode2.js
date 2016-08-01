//lets you access command ine arguments via the global var "process"
//prefixing something with + or Number() turns it into a number, bacause the things that come out of process.argv are strings
var sum=0;
//you have to get the whole array first, before you can do anything with it
var typedIn = process.argv;
//the actual inputs start at [2]
for (i=2; i<typedIn.length; i++){
	//only on a per-item basis can you coerce it into a number
	var number = +typedIn[i];
	sum = sum+number;
}
	console.log(sum);