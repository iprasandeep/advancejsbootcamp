// JavaScript Engine

// function jsengine(code)
// {
//     return code.split(/\s+/);
// }

// let a = jsengine('var a= 5');
// console.log(a);

//interpreter vs compiler

function someCalculation(x, y){
    return x+y;

}
let a;
for(let i = 0; i<1000; i++)
{
   a =  someCalculation(5,4);
  
}

console.log(a);