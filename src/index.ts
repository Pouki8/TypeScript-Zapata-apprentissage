let message: string = 'Hello World !';
console.log(message);


//****************************************************** */
//****************************************************** */
//****************************************************** */
// test Boss
import { Hero } from "./hero";
import { HeroAxe } from "./heroAxe";
import { HeroSword } from "./heroSword";
import { HeroSpear } from "./heroSpear";

// test du projet avec 2 heros, de force et de vie différentes
// mes 2 variables Joan et Leon
const Joan = new Hero("Joan", 20, 50);
const Leon = new Hero("Leon", 12, 150);

console.log(Joan.Name + " a " + Joan.Life + " et " + Leon.Name + " a " + Leon.Life);
//Create a loop that makes two instances of subclasses Hero fight each other 
//(they attack at the same time).
// une boucle pour faire un combat jusqu'à ce que l'un perde
while (Joan.isAlive() && Leon.isAlive()) {
    Joan.attack(Leon);
    Leon.attack(Joan);

    console.log("Il reste " + Joan.Life + " a " + Joan.Name + " et " + Leon.Life + " a " + Leon.Name);
}

//When at least one of them is dead, display {heroName} wins. If both are dead, display It's a draw.
// Je vais faire une condition if pour le résultat du combat après la boucle :
if (Joan.isAlive() && !Leon.isAlive()) {
    console.log(Joan.Name + " wins !");
} else if (!Joan.isAlive() && Leon.isAlive()) {
    console.log(Leon.Name + " wins !");
} else {
    console.log("It's a draw.");
}