import { Weapon } from "./weapon";
import { Hero } from "./hero";
import { HeroAxe } from "./heroAxe"

export class HeroSpear extends Hero {


    constructor(name: string, power: number, life: number, weapon: Weapon) {
        super(name, power, life, weapon);
        this.weapon = new Weapon("Spear", 10);
    }


    attack(opponent: Hero): void {
        if (opponent instanceof HeroAxe) {
            opponent.Life -= this.Power * 2;
        } else {
            super.attack(opponent);
        }
    }
}