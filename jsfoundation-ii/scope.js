// 'use strict'
// function weird(){
//    let height = 50;
    
//     return height;
// }
// weird();



// var heyhey = function doodle(){
//     // do something
//     return 'heyhey';
// }

// heyhey();

// =======================================
// function Scope vs Block Scope
//========================================

// function scope
// function num(){
//     var a = 12;
//     return a;
// }
// console.log(num())


// block scope

function loop(){
    for(let i = 0; i<5; i++)
    {
        console.log(i);
    }

    console.log('final', i); // cant access outof blocks scope
}
loop();