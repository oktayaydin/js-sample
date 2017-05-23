// Each of the following options will create a new empty object:
 
var newObject1 = {};
 
// or
var newObject2 = Object.create( Object.prototype );
 
// or
var newObject3 = new Object();



// ECMAScript 3 compatible approaches
 
//region 1. Dot syntax
 
// Set properties
newObject1.someKey1 = "Hello World";
 
// Get properties
var value1 = newObject1.someKey1;
 
//endregion


//region  2. Square bracket syntax
 
// Set properties
newObject1["someKey2"] = "Hello World";
 
// Get properties
var value2 = newObject1["someKey2"];
 
//endregion
 
// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/
 

//region  3. Object.defineProperty
 
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



// To use, we then create a new empty "person" object
var person1 = Object.create( Object.prototype );

// Populate the object with properties
defineProp( person1, "car", "Delorean" );
defineProp( person1, "dateOfBirth", "1981" );
defineProp( person1, "hasBeard", false );
 
console.log('person1:',person1);
// Outputs: Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}
 
//endregion

//region 4. Object.defineProperties
 
// Set properties
Object.defineProperties( newObject1, {
 
  "someKey4": {
    value: "Hello World",
    writable: true
  },
 
  "anotherKey4": {
    value: "Foo bar",
    writable: false
  }
 
});

// Getting properties for 3. and 4. can be done using any of the
// options in 1. and 2.

// Usage:

// Create a race car driver that inherits from the person object
var driver1 = Object.create( person1 );
var driver2 = person1;

// Set some properties for the driver
defineProp(driver1, "topSpeed", "100mph");
defineProp(driver2, "topSpeed", "100mph");

console.log('driver1: ', driver1);
console.log('driver2: ', driver2);

console.log('driver1.car: '+ driver1.car + ', driver1.topSpeed: '+ driver1.topSpeed);
console.log('driver2.car: '+ driver2.car + ', driver2.topSpeed: '+ driver2.topSpeed);

// Get an inherited property (1981)
// console.log( driver.dateOfBirth );

// Get the property we set (100mph)
// console.log( driver.topSpeed );

//endregion


