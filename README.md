# Briefing

You will have to find the following information and test them as you go along in your program to experiment and understand how TypeScript will help you write your best code!

## Level 1

- Which are the different primitive data types in TypeScript?
There are three main types of very common primitive data: string, data, and booleans (Null and underfined). Number corresponds to numbers. There is no int or float in typescript.
exemple :
let message: string = "Hello World";
let nombre: number = 5;
let VraiFaux: boolean = true;
See the examples in the index.ts

- How to type an Array?
When we want to initiate an array, we use square brackets []. For example, we can use the number[] syntax for arrays of numbers and do the same for strings: string[]. (and let fruits: Array<string> = ["ananas", "apple"]) See the examples in the index.ts

- What is the `any` type?
We can use `any`, to use any type of value and there will be no errors during type checking. See the examples in the index.ts
let object: any = "Good Morning";
console.log(object);
let numberOne: number = object;
object = 12;
console.log(object);

- How to type the return of a function as well as the type of its parameters?
In a function, we need to return the type of the function with its parameters whether it is a number or a string.
See the examples in the index.ts
function addition(a: number, b: number) {
    return a + b;
}
function getTime(a: number, b: number): number {
  return new Date().getTime();
}

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Level 2

- What is a class?
In TypeScript, classes extend functionality by incorporating specific features such as type annotations, access modifiers, and the ability to define mandatory or optional parameters.
- What is a class constructor?
A constructor is a special function that exists inside a class, that is called only once when the object is created.
- What is a class instance?
A class is a blueprint which you use to create objects. An object is an instance of a class - it's a concrete 'thing' that you made using a specific class. So, 'object' and 'instance' are the same thing, but the word 'instance' indicates the relationship of an object to its class.
- How to check that a class is of a certain instance?
To check if an instance belongs to a certain class in programming, you typically use the instanceof operator (Java, JavaScript), isinstance function (Python), or is keyword (C#). These constructs conditionally execute code based on whether the object is an instance of a specific class.
- What is `this` in a class?
In object-oriented programming, the keyword this refers to the current instance of the class in which it is used. It is used to access the members of the current object being processed.
public class Foo
{
    private String name;

    public void setName(String name) {
        this.name = name;
    }
}
- What is a class method?
A class method is a method that can be invoked without reference to any object instance; these are called static methods in other languages. The term method usually refers to an instance method.
- What is the visibility of properties?
In programming, "visibility of properties" refers to the accessibility of class members. Common modifiers include "public" (accessible from anywhere), "private" (accessible only within the class), and "protected" (accessible to the class and its subclasses).
- What is the difference between `public`, `private` and `protected`?
"public" (accessible from anywhere)
"private" (accessible only within the class)
"protected" (accessible to the class and its subclasses)


**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Level 3

- How to split our program into different files? (e.g. a class in a file that I import into another)
In TypeScript, you can split your program into different files and use the import and export statements to manage the dependencies between these files.
- What is the `export` keyword?
In TypeScript, the export keyword is used to indicate that a class, function, variable, or module is intended to be used in other TypeScript files. For exemple : 
export class MyClass {
}
- What is the `import` keyword?
In TypeScript, the import keyword is used to include functionalities (such as classes, functions, variables, modules, etc.) from other TypeScript files. It allows referencing exported elements (using the export keyword) in one file to use them in another. For exemple : 
import { MyClass } from
const myObject = new MyClass();
- What's inheritance?
Inheritance is an aspect of OOP languages, which allows a program to create a new class from an existing class. It is a mechanism that acquires the properties and behaviors of one class from another class.
// Classe de base
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log("Un son générique");
    }
}

// Sous-classe héritant d'Animal
class Chien extends Animal {
    // Des propriétés ou méthodes supplémentaires peuvent être ajoutées ici

    // Remplacez la méthode makeSound
    makeSound() {
        console.log("Ouaf ! Ouaf !");
    }
}

// Utilisation
const monChien = new Chien("Buddy");
console.log(monChien.name); // Accès à la propriété héritée
monChien.makeSound(); // Appel de la méthode remplacée
- How to call the constructor of a parent class?
Use super() in the constructor of the child class to call the constructor of the parent class.
class Chien extends Animal {
    race: string;

    constructor(name: string, race: string) {
        super(name); // Appel du constructeur de la classe parente
        this.race = race;
    }

- How to call a method of a parent class?
Use super() in the constructor of the child class to call the constructor of the parent class. Also, use the super. methodInParentClass() syntax to invoke the methodInParentClass() in the method of the child class.
class Chien extends Animal {
    // Remplacez la méthode makeSound
    makeSound() {
        super.makeSound(); // Appelle la méthode makeSound de la classe parente
        console.log("Ouaf ! Ouaf !");
    }
- What is polymorphism?
Polymorphism is the ability to create a class that has more than one form. Or in other words, classes have the same methods but different implementations.

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Boss level

You've learned a lot of things! Now it's time to put it into practice through this exercise in pairs!

### Part 1 : Heroes

Create a `Hero` class that allows you to create objects with the following properties:

```ts
name: string;
power: number;
life: number;
```

And the methods

```ts
  attack(opponent: Hero)
  isAlive()
```

The `attack` method has an `opponent` parameter (of type `Hero`). It is necessary to reduce the number (`life`) of `opponent` by as much damage (`power`) of the attacker.

​*Example: If the Joan instance, attacks the Leon instance, it will be represented by this method call:*

```ts
joan.attack(leon);
```

The `isAlive` method should return `true` if the hero's life points are greater than zero and `false` otherwise.

Create two instances of `Hero` and check that the `attack` and `isAlive` methods work.

**Constraint to add**: you now have to make sure that the `name`, `power`, `life` properties are private. You will have to create methods to access their value and modify their value.

### Part 2 : Weapons

​
Create a `Weapon` class with the following property:

```ts
name: string;
```

Add the `weapon` attribute (of type `Weapon`) to the `Hero` class without modifying the constructor (so `weapon` is not initialized).

Create three classes `HeroAxe`, `HeroSword` and `HeroSpear` that inherit from `Hero`.

These three classes call the constructor of their parent and initialize `weapon` with instances of the `Weapon` class whose names will be `axe`, `sword` or `spear` as the case may be.

In the `HeroAxe`, `HeroSword` and `HeroSpear` classes, redefine the `attack` method to take into account the following cases:

- `HeroAxe` : if the type of `opponent` is `HeroSword`, multiply `power` by two
- `HeroSword` : if the type of `opponent` is `HeroSpear`, multiply `power` by two
- `HeroSpear` : if the type of `opponent` is `HeroAxe`, multiply `power` by two

Tip: use the `super` keyword to call the `attack` method of the parent class.
​
Create instances of the three classes `HeroAxe`, `HeroSword` and `HeroSpear` and check that their `attack` methods work correctly.
​

### Part 3 : Battle

Create a loop that makes two instances of subclasses `Hero` fight each other (they attack at the same time).

When at least one of them is dead, display `{heroName} wins`. If both are dead, display `It's a draw`.

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

---

**_Bonus 1 : Weapon damage_**

_Add a `damage` property to the `Weapon` class and make sure it is initialized by the constructor._

_Edit the `attack` method of `Hero` so that the damage is calculated as follows: the hero's power `power` + the weapon's damage `power`_

**_Bonus 2 : User interface_**

_Create a user interface for the application (for example, with a choice of heroes and weapons, and a visual on the damage inflicted)_
