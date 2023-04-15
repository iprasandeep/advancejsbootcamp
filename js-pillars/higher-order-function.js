// // HOF is a function that can take a function as an argument
// // or A function that returns another function


// // why HOC is usefull


// // let  we are creating a login function for company 

// function letAdminLogin(){
//     let array = [];
//     for(let i = 0; i<10000; i++)
//     {
//         array.push(i);
//     }
//     return 'Access Granted to Adam!'
// }

// function letEvaLogin(){
//     let array = [];
//     for(let i = 0; i<10000; i++)
//     {
//         array.push(i);
//     }
//     return 'Access Granted to Eva!'
// }

// console.log(letAdminLogin());
// console.log(letEvaLogin());


// in better way



// const giveAccessTo = (name) =>{
//     'Access Granted to '+ name
   
// }
// function authenticate(verify){

//         let array = [];
//             for(let i = 0; i<verify; i++)
//             {
//                 array.push(i);
//             }
//         return true;
//     }

//     function letPerson(person, fn){
//         if(person.level == 'admin')
//         {
//             fn(500000)
//         }
//         else if(person.level === 'person')
//         {
//             fn(10000)
//         }
//         return giveAccessTo(person.name);
//     }

// console.log(letPerson({level: 'user', name: 'Time'},
// authenticate));
