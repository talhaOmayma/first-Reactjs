//Déclaration des variables  "let" "const"
// var age = 28; ancienne declaration en js
//let age = 28;
//const name = "Karim";
//Déclaration des fonctions (Arrow function)
//function sayHello(){alert("hello ES6");}
const sayHello = ()=>{alert("hello Arrow function !");}
//sayHello();

//Template String
let ville ="Rabat"
//alert(`Je suis de ${ville}`);

//Spread Operator
// var person={
//     nom:"Ali",
//     age: 27
// }
// person.ville = "Rabat";
// console.log(person);
let person={
    nom:"Ali",
    age: 27,
    hobby: "Football"
 }
person={...person, city:"Rabat"}
console.log(person);
//Destructuring
const{nom,age} =person;
//alert (`${nom} ${age}`);
//Array Methods: map - filter - find
// some - every - reduce.
let notes = [17,18,9,10,19,8,15];
//=======map
let resmap =notes.map((value,index,array)=>{
return value;
})
//alert(resmap)

//======filter

let resfilter= notes.filter((value)=>{
    return value <=10;
})
//alert(resfilter)

//======find
let resfind = notes.find((value)=>{
   return value === 18;
})
//alert(resfind)

//=======Every

let resevery = notes.every((value)=>{
    return value>10;
})

//alert(resevery);

//=======Some
let resSome= notes.some((value)=>{
    return value>10;
})

alert(resSome);

