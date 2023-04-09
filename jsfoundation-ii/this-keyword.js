// const obj = {
//     name: 'Billy',
//     sing(){
//         return 'lalala'+ this.name;
//     },
//     singAgain(){
//         return this.sing()+ this.name + '!';
//     }
// }

// function importantPerson(){
//     console.log(this.name+'!');
// }
// const name = 'Sunny';
// const obj1 = {
//     name: 'Cassy',
//     importantPerson: importantPerson
// }
// const obj2 = {
//     importantPerson: importantPerson
// }
// obj2.importantPerson();

// const a = function(){
//     console.log('a', this)
//     const b = function(){
//         console.log('b', this)
//         const c = {
//             hi: function(){
//                 console.log('c', this);
//             }
//         }
//         c.hi();
//     }
//     b();
// }
// a()


const obj = {
    name: 'Billy'
}