// typeof 5
// typeof true
// typeof 'To be or not to be'
// typeof undefined
// typeof null
// typeof Symbol('Just Me') // sued for object properties
// typeof {}


// function a(){
//     return 5;
// }

// a.hi = 'hihihi'
// console.log(a.hi);

// console.log(true.toString());

// var array = [1,2,3];
// var array = {
//     0:1,
//     1:2,
//     2:3
// }
// Array.isArray([1,2,3]);

// pass by reference and pass by value

//pass by value -> copy the value and create the value at somewhere else in memory

// var a = 5;
// var b = 10;
// b = a;
// b++;
// console.log(b)
// console.log(a);

// pass by reference ->  we dont copy the value in memory instead we just change value and both point same memory

// let obj1 = {name: 'YES', password: '123'};
// let obj2 = obj1;
// obj2.password = "43#23%$@";
// console.log(obj1);
// console.log(obj1);

// var c = [1,2,3,4,5];
// var d = [].concat(c);
// d.push(187628761)
// console.log(d);


// var a = 5;
// var b = a;
// b++;
// let obj1 = {a: 'a', b: 'b', c: 'c'};
// let clone  = Object.assign({}, obj1);
// let clone2 = {...obj1};
// obj1.c  =5;
// console.log(clone);
// console.log(clone2);

// let obj = {
//     a: 'a',
//     b: 'b',
//     c: {
//         deep: 'try and copy me!'
//     }
// };
// let clone = Object.assign({}, obj);
// let clone2 = {...obj}
// let superClone = JSON.parse(JSON.stringify(obj))

// // obj.c.deep = 'hahaha';
// // console.log(obj);
// console.log(superClone);

// console.log(1 === '1');

// if(1){
//     console.log(5);
// }  

// -0
// +0+

// console.log(Object.is(NaN) === Object.is(NaN)); //  true


// Dynamic typed 

// var a = 100;
// console.log(typeof a);

// in dynamic language type checking done during runtime

// function sum(a:number, b: number)
// {
//     return a+b;
// }
// sum('hello', null);

// typescript - > staticaly typed language


// var a = 'boooooya';

// a+17
// "boooooooya17";

// typescript

//flow -> created by fb, typescript ->  msft
// 