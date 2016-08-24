/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Yuliia D");
var Name = "Yuliya Dorofeieva";
var Role = "Web Developer";
var age = 23;
//console.log(Name);
var awesomeThoughts = "I am Yuliya and I am AWESOME!";
// console.log(awesomeThoughts);
var funThougts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(funThougts);
$("#main").append('Yuliia');

var formattedName = HTMLheaderName.replace("%data%",Name);

var formattedRole = HTMLheaderRole.replace("%data%",Role);
//$("#header").append(formattedRole);
$("#header").append(formattedRole);
$("#header").prepend(formattedName);





var A = function(str) {
    return str.slice(1).slice(0, 1).toUpperCase() + str.slice(2);
}

var x = A ("audacity");

var y = A ("hsusi");
console.log(y);
console.log(x);

var s = "jyuliya";
var F = function(s) {
    return s[1].toUpperCase() + s.slice(2);
}
  

var s = "bdenis";
console.log(F(s));
console.log(F(s));