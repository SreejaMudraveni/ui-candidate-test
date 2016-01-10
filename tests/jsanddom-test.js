/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/
test( "reverseString Test",function() {  
	equal( typeof reverseString, 'function', 'Must contain a reverseString function' );   
	ok(reverseString('sreeja'), 'ajeers', 'the result was: ' + reverseString('sreeja') );  
});  
test( "findMinValue Test",function() {  

	equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );   
	ok(findMinValue([121,32,103,956]), 32, 'the result was: ' + findMinValue([121,32,103,956]) );  
});  

test( "findDistinctValues Test",function() {  
 
	equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );   
 	ok(findDistinctValues(["sreeja", "lalit", "madhu", "sreeja"]), ["sreeja", "lalit", "madhu"], 'the result was: ' + findDistinctValues(["sreeja", "lalit", "madhu", "sreeja"]) );  
 });  

test( "doFizzBuzz Test",function() {  

	equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );   
	ok(doFizzBuzz(), true, 'the result was: ' + doFizzBuzz());  
 });  
