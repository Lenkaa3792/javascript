//alert( "This is an inline js" );
//printing on the webpage 
document.write( '<h1>This is my javascript </h1>' )
//logging to console
document.write( "This is my page" +'<br>')

//data types
//1 numbers
num1 = 2;
num2 = 4;
document.write(num1 + "<br>");
//adding
document.write(num1 + num2 + "<br>");
//strings
var name = 'john';
document.write( name + "<br>" );
//concatenation
var age = 23;
var city = 'Nairobi';
var car = 'lexus';
 document.write("My name is " + name + "." + "I live in " + city + " and I drive a " + car <
     "br>");
//if statements

let favoriteNumber = 50;
if (favoriteNumber >= 10) {
  // evaluating favoriteNumber >= 10 returns true
  favoriteNumber = favoriteNumber + 10;
}
document.write(favoriteNumber +'<br');

let bestCar = "lexus";
if (bestCar !== "ford") {
  document.write("you are out");
}