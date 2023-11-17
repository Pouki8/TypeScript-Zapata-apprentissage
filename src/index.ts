let message: string = 'Hello World !';
console.log(message);

// Level 1
// Exercice 1 :
let nombre: number = 5;
let VraiFaux: boolean = true;

console.log(nombre);
console.log(VraiFaux);

// Exercice 2 :
const arrayString: string[] = ["Monday", "Tuesday"];
console.log(arrayString);

const arrayNumber: number[] = [3, 5, 8, 2];
console.log(arrayNumber);

// Exercice 3 :
let object: any = "Good Morning";
console.log(object);
let numberOne: number = object;
object = 12;
console.log(object);

// Exercice 4 :
function addition(a: number, b: number) {
    return a + b;
}
function getTime(a: number, b: number): number {
    return new Date().getTime();
}

// Level 2
//  Exercice 1, 2, 3 : class, constructeur, instance
class MyAge {
    age: number;
}
const myAge = new MyAge
myAge.age = 5;
console.log(myAge.age);