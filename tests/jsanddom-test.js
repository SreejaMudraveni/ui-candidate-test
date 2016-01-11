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

test( "sum Test",function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 
    ok(sum(3,6,3,10), 22, 'the result was: ' + sum(3,6,3,10));
    ok(sum(5,4,7,20,40), 76, 'the result was: ' + sum(5,4,7,20,40));
});

test( "isOnlyWhitespace Test",function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' ); 
    ok(isOnlyWhitespace("   "), true, 'the result was: ' + isOnlyWhitespace("   "));
});


test( "splitListStrUsingComma Test",function() {  
	equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );   
	var str = "How,are,you,doing,today?";  
	ok(splitListStrUsingComma(str), ["How","are","you","doing","today?"], 'the result was: ' + splitListStrUsingComma(str));  
	var strNull = null;   
	ok(splitListStrUsingComma(strNull), [], 'the result was: ' + splitListStrUsingComma(strNull));  
}); 

test( "pushOntoArray Test",function() {  
	equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );   
	var pushArr1 = ['push1','push2', 'push3', 'push4'];  
	var pushArr2 = ['push5', 'push6', 'push7'];  
	pushOntoArray(pushArr1,pushArr2)  
	ok(pushArr1.length, 7, 'the result was: ' + pushArr1.length);  
});  


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


test( "removeFruits Test",function() {  

	equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );   
	ok(removeFruits(["apple", "orange", "mango", "peach", "grape"], ["apple","grape"]),["orange","mango","peach","grape"], 'the result was: ' + removeFruits(["apple", "orange", "mango", "peach", "grape"], ["apple","grape"]));
 });  
