// Each of the following options will create a new empty object:
 
var newObject1 = {};
 
// or
var newObject2 = Object.create( Object.prototype );
 
// or
var newObject3 = new Object();


// ECMAScript 3 compatible approaches
 
// 1. Dot syntax
 
// Set properties
newObject1.someKey1 = "Hello World";
 
// Get properties
var value1 = newObject1.someKey1;
 
 // 2. Square bracket syntax
 
// Set properties
newObject1["someKey2"] = "Hello World";
 
// Get properties
var value2 = newObject1["someKey2"];
 
 
// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/
 
// 3. Object.defineProperty
 
// Set properties
Object.defineProperty( newObject1, "someKey3", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});


// If the above feels a little difficult to read, a short-hand could
// be written as follows:
 
var defineProp = function ( obj, key, value ){
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty( obj, key, config );
};





console.log(newObject1,newObject2,newObject3);