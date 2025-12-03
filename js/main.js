console.log("Hello World!");
console.log("I am " + 21 + " years old.");
console.log(3/2);
console.log(0.1 + 0.2);
if(true){
    let x = 10;
    const y = 20;
    console.log(x);
    console.log(y);
}

function parentFunc() {
const a = 1;

function nestedFunc(){
    const b = 4;
    return a + b;
}
return nestedFunc();

}
 console.log(parentFunc());
function Fullname(firstname, lastname) {
    return firstname + " "  + lastname;
}

console.log(Fullname("Fernanda", "De La Fuente"));


const array = [1, 2, 3, 4, 5];

console.log(array);
console.log(array[2]);

