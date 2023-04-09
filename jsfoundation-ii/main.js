function printName(){
    return 'Mohit'
}
function findName()
{
    return printName();
    // lexical enviroment
    function a()
    {
        console.log("lexical")
    }    
}
function sayMyName(){
    
    return findName()
}

let res = sayMyName();

console.log(res);

