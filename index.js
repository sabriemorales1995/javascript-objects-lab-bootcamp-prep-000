var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value});
  //return an object with the original key value pairs and the new key value pair
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]= value;
  return object;
}



/*
Objects -- updates `object` with the given `key` and `value` (it is destructive) and returns theentire updated object:
     ReferenceError: destructivelyUpdateObjectWithKeyAndValue is not defined
      at Context.<anonymous> (test/index-test.js:31:7)

  5) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
     ReferenceError: deleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:46:20)

  6) Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):
     ReferenceError: deleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:54:7)

  7) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
     ReferenceError: destructivelyDeleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:62:20)

  8) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:
  
  */