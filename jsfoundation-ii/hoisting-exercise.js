// a();
// function a(){
//     console.log('hi');
// }
// // a();
// function a(){
//     console.log('bye');
// }
// // a();

// var favoriteFood = undefined;
// var favoriteFood = undefined;
// var favoriteFood = "grapes";

// var foodThoughts = function (){
//     console.log('Original favorite food: '
//     +favoriteFood);

//     var favoriteFood = "sushi";

//     console.log("New favorite food "+
//     favoriteFood);
// };
// foodThoughts();


// function expression
// function declaration
india();
var canada = function(){
    console.log('cold!');
    console.log(arguments);
}

function india(){
    console.log('warm');
}
canada();
// function Invocation/Calling function


// function marry(person1, person2){
//     console.log(arguments);
//     return `${person1} is now
//     married to ${person2}`;
// }
// marry('Tim', 'Tina');


// function marry2(...args){
//     console.log('arguments', args)
//     console.log(Array.from(arguments))
//     return `${person1} is now married to ${args[1]}`
// }
// marry2('Tim', 'Tina');