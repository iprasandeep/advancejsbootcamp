// function a(){
//     console.log('hi');
// }
// a.call();
// a.apply();


const wizard = {
    name: 'Merlin',
    health: 50,
    heal(){
        return this.health = 100;
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30
}
console.log('1', archer);
const healArcher = wizard.heal.call(archer, 50, 30);
console.log('2', archer);


// call, apply ->  take argument
// bind -> take array as an argument
// bind - return new function and allow us to interact/bind with 'this' keyword
