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

// level 3 : import export
export class MyClass {
}
export function myFunction() {
}
export const myVariable = 42;

//****************************************************************************** */
//****************************************************************************** */
// BOSS
// création de la class Hero 
class Hero {
    // avec les propriétés suivante (name qui est de type string, power de type number et life de type number)
    name: string;
    power: number;
    life: number;
    // J'ai fait un constructeur avec mes propriétés 
    constructor(name: string, power: number, life: number) {
        this.name = name;
        this.power = power;
        this.life = life;
    }
    // Je crée la méthode attack()
    //The `attack` method has an `opponent` parameter (of type `Hero`).
    //La méthode `attack` a un paramètre `opponent` (de type `Hero`). 
    attack(opponent: Hero): void {

        // It is necessary to reduce the number (`life`) of `opponent`
        //by as much damage (`power`) of the attacker.


        //Il faut réduire le nombre (« vie ») de « l'adversaire » d'autant de dégâts (« puissance »)
        // de l'attaquant.
        if (opponent.isAlive()) {
            // si la vie diminue d'autant de dégât de la puissance de l'attaque
            opponent.life -= this.power;
            console.log(`${this.name} attaque ${opponent.name} avec ${this.power} de pouvoir !`);
            // Log the opponent's updated life
            console.log(`Il reste ${opponent.life} de pouvoir à ${opponent.name} `);
        } else {
            console.log(`${opponent.name} a perdu !`);
        }
    }
    //La méthode isAlive devrait revenir true si les points de vie du héros sont supérieurs 
    // à zéro 
    // et false dans le cas contraire.
    isAlive(): boolean {
        return this.life > 0;
    }
}

// Création de l'instance Joan et Leon
const Joan = new Hero("Joan", 20, 100);
const Leon = new Hero("Leon", 12, 100);
// Je fais une boucle pour dire à Joan et Leon de lancer une attaque chacun leur tour
while (Joan.isAlive() && Leon.isAlive()) {
    // Joan attaque en premier, avec la méthode Joan.attack(Leon);
    Joan.attack(Leon);
    //Si Leon est vivant et que Joan l'attaque dans la méthode attack(opponent: Hero) :
    if (!Leon.isAlive()) {
        console.log(`${Leon.name} a perdu !`);
        break;
    }
    // Seconde méthode, quand Leon attaque Joan
    Leon.attack(Joan);
    // Si Joan est vivant et que Leon l'attaque dans la méthode attack(opponent: Hero) :
    if (!Joan.isAlive()) {
        console.log(`${Joan.name} a perdu !`);
        break;
    }
    // Ainsi de suite jusqu'à ce que l'un des deux perde !!!
}
