// BOSS
// importer les fichiers Weapon :
import { Weapon } from "./weapon"
// création de la class Hero 
export class Hero {
    // avec les propriétés suivante (name qui est de type string, power de type number et life de type number)
    private name: string;
    private power: number;
    private life: number;
    private weapon: Weapon;
    // J'ai fait un constructeur avec mes propriétés 
    constructor(name: string, power: number, life: number, weapon: Weapon) {
        this.name = name;
        this.power = power;
        this.life = life;
        this.weapon = weapon;
    }
    // Je crée la méthode attack()
    //The `attack` method has an `opponent` parameter (of type `Hero`).
    //La méthode `attack` a un paramètre `opponent` (de type `Hero`). 
    attack(opponent: Hero): void {
        // si la vie diminue d'autant de dégât de la puissance de l'attaque
        opponent.life -= this.power;
    }

    //La méthode isAlive devrait revenir true si les points de vie du héros sont supérieurs 
    // à zéro 
    // et false dans le cas contraire.
    isAlive(): boolean {
        return this.life > 0;

    }
    // Ainsi de suite jusqu'à ce que l'un des deux perde !!!
}

// ajout de l'arme
const JoanWeapon = new Weapon("arme1");
const LeonWeapon = new Weapon("arme2");
// Création de l'instance Joan et Leon
const Joan = new Hero("Joan", 20, 80, JoanWeapon);
const Leon = new Hero("Leon", 30, 100, LeonWeapon);



while (Joan.isAlive() && Leon.isAlive()) {
    Joan.attack(Leon);
    if (!Leon.isAlive()) {
        console.log("${Leon.name} a perdu !");
        break;
    }
    Leon.attack(Joan);
    if (!Joan.isAlive()) {
        console.log("${Joan.name} a perdu !");
    }
    break;
}
