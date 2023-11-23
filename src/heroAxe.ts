// import des fichiers heroWeapon heroSword et heroSpear
import { Weapon } from "./weapon";
import { Hero } from "./hero";
import { HeroSword } from "./heroSword"

// création de la class avec un export
export class HeroAxe extends Hero {
    constructor(name: string, power: number, life: number, weapon: Weapon) {
        super(name, power, life, weapon);
        this.weapon = new Weapon("Axe", 20);
    }

    attack(opponent: Hero): void {
        if (opponent instanceof HeroSword) {
            opponent.Life -= this.Power * 2;
        } else {
            super.attack(opponent);
        }
    }
}