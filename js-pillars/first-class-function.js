// Functions are fist class citizens in JS -  thats why js called functional programming

// 1 -> function can be assign to variable 



var stuff = function(){}
// 2 -> 
// can pass function as an argument 
function a(fn){
    fn()
}

// can return function a value 

a(function() {console.log('hi there')})

// 3
// can return function as value in another function
function b(){
    return function c() { console.log('bye')}
}

var d = b()
d()