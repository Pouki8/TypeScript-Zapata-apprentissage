// BOSS
// importer les fichiers Weapon :
import { Weapon } from "./weapon"
// création de la class Hero 
export class Hero {
    // avec les propriétés suivante (name qui est de type string, power de type number et life de type number)
    private name: string;
    private power: number;
    private life: number;
    protected weapon: Weapon;


    // J'ai fait un constructeur avec mes propriétés 
    constructor(name: string, power: number, life: number) {
        this.name = name;
        this.power = power;
        this.life = life;
    }

    // création de méthode pour les paramètres privé
    get Name(): string {
        return this.name;
    }
    get Power(): number {
        return this.power;
    }
    get Life(): number {
        return this.life;
    }
    set Name(name: string): void {
        this.name = name;
    }
    set Power(power: number): void {
        this.power = power;
    }
    set Life(life: number): void {
        this.life = life;
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
}


