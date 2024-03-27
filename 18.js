
//

sogh();

function some(){
    value = 10;
    value++;
    console.log(value);
}

function count(){
    var count =0;
    return function(){
        count++;
        return count;
    }
}

var c = count();
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
some();
some();
some();
some();
some();
some();
some();


//hoisting
add();

function add(){
    console.log(10+10);
}

console.log(a)
var a = 234;

console.log(a)

function sogh(){
    console.log("last function defined ....")
}