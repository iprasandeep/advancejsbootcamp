// let array  = [];

// for(let i = 5; i>1; i++)
// {
//     array.push(i-1);
// }


// three common memory leak

// 1. Global variable

var a = 1;
var b = 1;
var c = 1;

// 2. Event Listeners

var element = document.getElementById('button');

element.addEventListener('click', onClick);

// 3. setInterval

setInterval(()=>{
    // referencing objects...
})

