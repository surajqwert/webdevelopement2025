console.log("Hello World");

// function sum(a,b){
//     return a+b;
// }

let multi = function(a,b){
    return a*b;
}

let sub = (a,b)=> a-b;

setTimeout(sub,2000);

(function(){
    console.log("Hello Pune");
})();

function showMessage(){
    alert("Message Pop up");
}



function substraction(a,b){
    return a-b;
}
console.log(substraction(10,2));

function grad(a){
    console.log("Grade of student is" +a);
}
grad(20);

function msg(){
    alert("Message display");
}

let arr = [10, 20, 30, 40, 50];
console.log(arr);

arr.push(60);
console.log(arr);
arr.pop();
console.log(arr);

arr.unshift(5);
console.log(arr);
arr.shift();
console.log(arr);

for(let i = 0; i< arr.length; i++){
    console.log(arr[i] +" ");
}

arr.forEach(function(value, index){
    console.log("index is "+index+ " & value is "+value);
    console.log(`index is ${index} & value is ${value}`);
});

let marks = [40, 50, 65, 83, 90];

let grace = marks.map(m => m+5);
let pass = marks.filter(m => m > 40);

console.log(grace);
console.log(pass);


let number = [10, 45, 37, 74, 19];
number.push(20);
console.log(number);
number.pop();
console.log(number);

let square = number.map(m => m*m);
console.log(square);

let even = number.filter(n => n%2==0);
console.log(even);

let sums = number.reduce((sum, m) => sum+m , 0);
console.log(sums);

let[first, second] = number;
console.log(first);
console.log(second);

number.forEach(function(value, index){
    console.log(`index is ${index} and value is ${value}`);
});


let text = "Javascript Language";

console.log(text);
console.log(text.length);

console.log(text.toUpperCase());

console.log(text.toLowerCase());

console.log(text.includes('new'));

console.log(text.startsWith('Java'));

console.log(text.endsWith('Language'));

console.log(text.slice(0,9));
console.log(text.slice(11));
console.log(text.slice(-8, -1));

console.log(text.replace("Javascript", "JS"));

let str = "      Hello     World    ";
console.log(str.trim());

let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1, 5, 6];
console.log(arr1);
console.log(arr2);

let original = [10, 20, 30];
let copy = [...original];

copy.push(40);
console.log(original);
console.log(copy);

let emp = {
    name : "Alice",
    age : 28
};

let newEmp = {
    ...emp,
    city : "Pune"
};

console.log(emp);
console.log(newEmp);