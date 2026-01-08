// function declaration

function add(a,b){
    return a+b;
}

console.log(add(4,5));


// function expression

let mult = function(a,b){
    return a*b;
};
console.log(mult(3,4));


// arrow function 

let sub = (a,b) => a-b;
console.log(sub(9,4));


// default parameter

function call (name = "Samaira"){
    console.log("Hello "+ name);
};

call();
call("Joey");


// rest parameter

function sum(...rest){
    return sum.reduce()
}

let message = `
Hi, 
Welcome to Pune.
We are learning js...
`;
console.log(message);

let name = "Suraj";
let hobby = "cycling";
console.log(`Myselff ${name} and my hobby is ${hobby}`);

arr1 = [1,2,4];
arr2 = [3,5,6];
arr3 = [...arr1, ...arr2];
console.log(arr3);

function suma(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(suma(10, 20, 30, 40));


let student = {
    name: "Suraj",
    rollNo: 101,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

student.greet();

setTimeout(function(){
console.log("Executed after 3 second");
}, 3000);

let id1 = setInterval(()=>console.log("Print after every 1 second"), 1000);

setTimeout(()=>{clearInterval(id1);}, 5000)




 