// function two(){
//     var isValid; // undefined
// }

// function one(){
//     var isValid = true; // local enviroment
//     two(); // new EC
// }
// var isValid = false;
// one(); 

// two() -- undefined
// one() -- true
// global() -- false


// var x = 'avc';
// function findName(){
//     console.log(x)
//     var b = 'b';
//     return printName();
// }
// function printName(){
//     var c = 'c';
//     return 'Deep';
// }
// function sayMyName(){
//     var a = 'a';
//     return findName();
// }


// Lexical Enviroment

// function sayMyName(){
//     var a = 'a';
//     return function findName(){
//         var b = 'b';
//         console.log(c);
//         return function printName(){
//             var c = 'c';
            
//             return 'Deep';
//         }
//     }
// }
// sayMyName()()();

